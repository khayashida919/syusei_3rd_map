import { useState } from 'react';

import { Store, StoreState } from '@/entity/store';

export const useMapsContent = () => {
  const mock: Store[] = [
    {
      address: '〒650-0001 兵庫県神戸市中央区加納町４丁目６−５',
      googleLink: 'https://maps.app.goo.gl/yNZEMzZhQw17LpUr5',
      lat: 34.695404800408795,
      lng: 135.1928602742905,
      memo: '',
      name: 'シュガーママのお店QUEEN',
      state: 'full',
    },
    {
      address:
        '〒650-0004 兵庫県神戸市中央区中山手通１丁目８−２０ 三宮ＳＫビル B1F',
      googleLink: 'https://maps.app.goo.gl/rjgSzbhHdpwXBi3R7',
      lat: 34.6950680111787,
      lng: 135.19264059999978,
      memo: '',
      name: 'ダイニングバー Zorome',
      state: 'empty',
    },
    {
      address:
        '〒650-0001 兵庫県神戸市中央区加納町４丁目６−５ ロイヤルビル 4階',
      googleLink: 'https://maps.app.goo.gl/eGrW4rmcS7SmZM1U8',
      lat: 34.69536721147931,
      lng: 135.19286915671776,
      memo: '',
      name: 'OZ KOBE (オズ コウベ)',
      state: 'low',
    },
    {
      address:
        '〒650-0004 兵庫県神戸市中央区中央区中山手通１丁目１６−６ NK東門ビル2F',
      googleLink: 'https://maps.app.goo.gl/Y1gjTZM65ZjbeoPm6',
      lat: 34.69550657773058,
      lng: 135.19129008220892,
      memo: '',
      name: '酒肴 あうん',
      state: 'empty',
    },
    {
      address:
        '〒650-0001 兵庫県神戸市中央区加納町４丁目６−４ クレンツ北野坂ビル B1F',
      googleLink: 'https://maps.app.goo.gl/zByoi8UJa8PeVxfC9',
      lat: 34.69527732738536,
      lng: 135.19280527029326,
      memo: '',
      name: '備長炭焼「すだち」',
      state: 'full',
    },
    {
      address:
        '〒650-0011 兵庫県神戸市中央区下山手通２丁目１２−１３ 太平ビル 1F',
      googleLink: 'https://maps.app.goo.gl/SLFXFY3zU6KVZYoz5',
      lat: 34.6937596,
      lng: 135.1892116,
      memo: '',
      name: 'TEPPAN KAWASAKI',
      state: 'low',
    },
    {
      address:
        '〒650-0004 兵庫県神戸市中央区中山手通２丁目１０−２２ ＳＨＩＮＮＯ ＢＬＤＧ 1F',
      googleLink: 'https://maps.app.goo.gl/Ha4RN9QNkrH9LNfL7',
      lat: 34.6964898,
      lng: 135.190564,
      memo: '',
      name: 'すきしゃぶBAR ぽりん',
      state: 'full',
    },
    {
      address: '〒650-0004 兵庫県神戸市中央区中山手通１丁目５−７',
      googleLink: 'https://maps.app.goo.gl/VsdShtKoWAbBA3Zr9',
      lat: 34.69486839345982,
      lng: 135.19163396749494,
      memo: '',
      name: '会員制居酒屋「花の里 （はなのさと）」',
      state: 'empty',
    },
    {
      address:
        '〒650-0004 兵庫県神戸市中央区中山手通１丁目１７−１４ 東門タワービル 9F',
      googleLink: 'https://maps.app.goo.gl/oFQYDsDo5PhvJPAz7',
      lat: 34.6961489,
      lng: 135.1911242,
      memo: '',
      name: 'Sauvage （サヴァージュ）',
      state: 'empty',
    },
    {
      address: '〒650-0001 兵庫県神戸市中央区加納町４丁目７−２４ かのう屋',
      googleLink: 'https://maps.app.goo.gl/hjRAaRRuJyBXDMRy8',
      lat: 34.6958281,
      lng: 135.1928604,
      memo: '',
      name: '薗 （えん）',
      state: 'full',
    },
    {
      address:
        '〒650-0004 兵庫県神戸市中央区中山手通１丁目１５−２ 東門エースタウンビル',
      googleLink: '',
      lat: 34.6957834,
      lng: 135.1914795,
      memo: '',
      name: 'bar WILL',
      state: 'empty',
    },
    {
      address: '〒650-0004 兵庫県神戸市中央区中山手通２丁目１０−２２',
      googleLink: '',
      lat: 34.6964898,
      lng: 135.190564,
      memo: '',
      name: '占いスナック 輝光（きこう）',
      state: 'low',
    },
    {
      address:
        '〒650-0004 兵庫県神戸市中央区中山手通１丁目８−１１ 北野坂Ｆビル 9f',
      googleLink: '',
      lat: 34.6954372,
      lng: 135.1924749,
      memo: '',
      name: 'CRYSTAL LOUNGE',
      state: 'empty',
    },
    {
      address: '〒650-0011 兵庫県神戸市中央区下山手通２丁目１０',
      googleLink: '',
      lat: 34.693529,
      lng: 135.1909125,
      memo: '',
      name: 'ZIP（ジップ）',
      state: 'empty',
    },
    {
      address: '〒650-0001 兵庫県神戸市中央区加納町４丁目７−８',
      googleLink: '',
      lat: 34.6960416,
      lng: 135.1925014,
      memo: '',
      name: 'La Soirée （ラ・ソワレ）',
      state: 'low',
    },
    {
      address: '〒650-0001 兵庫県神戸市中央区加納町４丁目９−９',
      googleLink: '',
      lat: 34.6960523,
      lng: 135.1931371,
      memo: '',
      name: 'Diana （ディアナ）',
      state: 'empty',
    },
    {
      address: '〒650-0004 兵庫県神戸市中央区中山手通１丁目７−１８−１',
      googleLink: '',
      lat: 34.6951544,
      lng: 135.1923604,
      memo: '',
      name: '花華',
      state: 'empty',
    },
    {
      address:
        '〒650-0004 兵庫県神戸市中央区中山手通１丁目１７−１４ 東門タワービル 9f',
      googleLink: '',
      lat: 34.6961489,
      lng: 135.1911242,
      memo: '',
      name: 'Fleuri （フルーリ）',
      state: 'empty',
    },
    {
      address: '〒650-0004 兵庫県神戸市中央区中山手通１丁目７−７ 格子屋ビル',
      googleLink: '',
      lat: 34.6950326,
      lng: 135.1922477,
      memo: '',
      name: 'marine （マリン）',
      state: 'empty',
    },
    {
      address: '〒650-0001 兵庫県神戸市中央区加納町４丁目７−２６ 藤嶋ビル b1',
      googleLink: '',
      lat: 34.6961032,
      lng: 135.1929554,
      memo: '',
      name: 'Music BAR 宿花 -yomihana- （よみはな）',
      state: 'full',
    },
    {
      address:
        '〒650-0001 兵庫県神戸市中央区加納町４丁目９−１２ クリスタルコートビル 3f',
      googleLink: 'https://maps.app.goo.gl/LSKr63YWyxQGGjQt7',
      lat: 34.6963237,
      lng: 135.1935014,
      memo: '',
      name: 'スナック Ren',
      state: 'empty',
    },
    {
      address:
        '〒650-0001 兵庫県神戸市中央区加納町４丁目８−１４ 第１１シャルマンビル',
      googleLink: 'https://maps.app.goo.gl/7YFJvAYq9DeqHP1V8',
      lat: 34.6965353,
      lng: 135.19265,
      memo: '',
      name: 'BAR 楽風',
      state: 'full',
    },
    {
      address:
        '〒650-0011 兵庫県神戸市中央区下山手通２丁目１７−１０ ライオンビル三宮館 002',
      googleLink: 'https://maps.app.goo.gl/31AMw8nt5NSFEvE88',
      lat: 34.6942743,
      lng: 135.1899407,
      memo: '',
      name: 'マジックバーなんで屋！？',
      state: 'full',
    },
    {
      address:
        '〒650-0001 兵庫県神戸市中央区加納町４丁目８−１２ 北野坂クイーンズビル 3Ｆ',
      googleLink: 'https://maps.app.goo.gl/VDobskh5LobgdR816',
      lat: 34.6966416,
      lng: 135.1923574,
      memo: '',
      name: 'Bar show',
      state: 'empty',
    },
    {
      address: '〒650-0011 兵庫県神戸市中央区下山手通３丁目１０−１４',
      googleLink: 'https://maps.app.goo.gl/E43ykBsFEtP8tkYQ6',
      lat: 34.6930769,
      lng: 135.1883947,
      memo: '',
      name: 'SODAUP',
      state: 'full',
    },
    {
      address:
        '〒650-0011 兵庫県神戸市中央区下山手通１丁目５−４ コウベコンベックススクエア',
      googleLink: 'https://maps.app.goo.gl/2XBL3xKSE4LBWqWx7',
      lat: 34.6952331,
      lng: 135.1910405,
      memo: '',
      name: "Hiz'BAR （ヒズバー）",
      state: 'empty',
    },
    {
      address:
        '〒650-0011 兵庫県神戸市中央区下山手通１丁目５−４ コウベコンベックススクエア 407',
      googleLink: 'https://maps.app.goo.gl/2XBL3xKSE4LBWqWx7',
      lat: 34.6952325,
      lng: 135.1910953,
      memo: '',
      name: 'snack 418',
      state: 'empty',
    },
    {
      address:
        '〒650-0001 兵庫県神戸市中央区加納町４丁目７−１１ パレ・ド・北野坂 9階',
      googleLink: 'https://maps.app.goo.gl/UVE8bdphFKHHSyid6',
      lat: 34.696094,
      lng: 135.1926317,
      memo: '',
      name: 'RomiRomi',
      state: 'empty',
    },
    {
      address:
        '〒650-0004 兵庫県神戸市中央区中山手通１丁目１７−６ ハイム北野フェニックス 1F H102',
      googleLink: 'https://maps.app.goo.gl/1bTJUvzSFgUwwqgF9',
      lat: 34.6959665,
      lng: 135.1913149,
      memo: '',
      name: 'Standing Bar Blanc',
      state: 'empty',
    },
    {
      address: '〒650-0004 兵庫県神戸市中央区中山手通１丁目４−１',
      googleLink: 'https://maps.app.goo.gl/fDEN4g3krCWf7mYu6',
      lat: 34.693819,
      lng: 135.191847,
      memo: '',
      name: '＋ （プラス）',
      state: 'empty',
    },
    {
      address:
        '〒650-0012 兵庫県神戸市中央区北長狭通１丁目２１−９ Ｃｏｌｌｅｃｔｉｏｎ Ｋ ３階',
      googleLink: 'https://maps.app.goo.gl/4VCHnKn6sxexkkGp9',
      lat: 34.694488,
      lng: 135.1923731,
      memo: '',
      name: 'bar bonds',
      state: 'empty',
    },
  ];

  const [selectedStore, setSelectedStore] = useState<Store>();
  const [stores, setStores] = useState(mock);

  const onChangeStoreState = (state: StoreState) => {
    if (!selectedStore) return;

    const editStore = { ...selectedStore };
    const filtered = stores.filter((e) => e.name !== editStore.name);
    editStore.state = state;
    setSelectedStore(editStore);
    setStores([...filtered, editStore]);
  };

  return { onChangeStoreState, selectedStore, setSelectedStore, stores };
};
