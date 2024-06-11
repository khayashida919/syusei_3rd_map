import { useState } from 'react';

export const useSortKey = () => {
  const DESC_KEY = '_desc';

  const [sortKey, _setSortKey] = useState(''); // URLに追加する値
  const [sortColumn, setSortColumn] = useState(''); // 現在どのカラムでソートされているか

  const onSort = (sortKey?: string) => {
    if (!sortKey) return;
    if (sortKey === sortColumn) {
      _setSortKey(sortKey);
      setSortColumn('');
    } else {
      _setSortKey(`${sortKey}${DESC_KEY}`);
      setSortColumn(sortKey);
    }
  };

  // 外からソートキー設定用
  const setSortKey = (sortKey: string) => {
    _setSortKey(sortKey);
    setSortColumn(
      sortKey.indexOf(DESC_KEY) === -1 ? '' : sortKey.replace(DESC_KEY, ''),
    );
  };

  return { onSort, setSortKey, sortColumn, sortKey };
};
