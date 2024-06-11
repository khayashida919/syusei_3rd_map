import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { TableSearch } from '@/types';

// キーはすべて文字列で、値は文字列、数値、またはブール型
type QueryType = { [key: string]: string | number | boolean };

type useQueryProps<TForm extends QueryType, UPath extends QueryType> = Partial<{
  defaultForm: TForm;
  defaultPath: UPath;
  setFormType: Dispatch<SetStateAction<TForm>>;
  setPage: Dispatch<SetStateAction<number>>;
  setSortKey: (sortKey: string) => void;
}>;

export const useQueryString = <
  TForm extends QueryType,
  UPath extends QueryType = QueryType,
>(
  option: useQueryProps<TForm, UPath>,
) => {
  const { defaultForm, defaultPath, setFormType, setPage, setSortKey } = option;

  // QueryStringから取得したForm関連のパラメータを保持するステート
  const [initialForm, setInitialForm] = useState<TForm>();
  // 前画面から指定されたパスパラメータを保持するステート
  const [pathParameter, setPathParameter] = useState<UPath>();

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    // パスパラメータをstateに設定
    if (defaultPath) {
      // 前画面から指定されたパスパラメータをstateに保持
      const getPathParameter: QueryType = {
        ...defaultPath,
      } as QueryType;
      Object.keys(getPathParameter).forEach((key) => {
        getPathParameter[key] = queryStringConvert(
          router.query[key],
          (defaultPath as QueryType)[key],
        );
      });
      setPathParameter(getPathParameter as UPath);
    }

    // Form関連  QueryStringの検索条件を初期表示の検索条件としてstateに設定
    const getFormQuery: QueryType = { ...defaultForm };
    if (defaultForm && setFormType) {
      Object.keys(getFormQuery).forEach((key) => {
        getFormQuery[key] = queryStringConvert(
          router.query[key],
          defaultForm[key],
        );
      });
      // QueryStringをstateに展開
      setInitialForm(getFormQuery as TForm);
      setFormType(getFormQuery as TForm);
    }

    // Page関連
    if (setPage) {
      setPage(queryStringConvert(router.query.page, 1) as number);
    }

    // SortKey関連
    if (setSortKey) {
      setSortKey(queryStringConvert(router.query.sortKey, '') as string);
    }
  }, [router.isReady]);

  // 型の変換
  const queryStringConvert = (
    queryString: string | string[] | undefined,
    defaultValue: string | number | boolean,
  ): string | number | boolean => {
    switch (typeof defaultValue) {
      case 'string':
        return queryStringToString(queryString, defaultValue);
      case 'number':
        return queryStringToNumber(queryString, defaultValue);
      case 'boolean':
        return queryStringToBoolean(queryString, defaultValue);
      default:
        return defaultValue;
    }
  };
  // QueryStringで指定された文字列をbooleanに変換する
  const queryStringToBoolean = (
    str: string | string[] | undefined,
    defaultValue: boolean,
  ): boolean => {
    switch (str) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return defaultValue;
    }
  };

  // QueryStringで指定された文字列を文字列に変換する。文字列以外(undefinedや配列)はデフォルト値にする。
  const queryStringToString = (
    str: string | string[] | undefined,
    defaultValue: string,
  ): string => {
    return typeof str === 'string' ? str : defaultValue;
  };

  // QueryStringで指定された文字列を数値に変換する。数値以外(undefinedや配列)はデフォルト値にする。
  const queryStringToNumber = (
    str: string | string[] | undefined,
    defaultValue: number,
  ): number => {
    const num = Number(str);
    return isNaN(num) ? defaultValue : num;
  };

  // オブジェクトをQueryStringに変換して設定
  const setQueryString = (params: TForm & TableSearch) => {
    //パスパラメータのオブジェクトを作成
    const query = {
      ...(pathParameter ?? {}),
    } as ParsedUrlQueryInput;

    //パスパラメータをベースとして作成したオブジェクトにFormのパラメータを追加する
    Object.keys(params).forEach((key) => {
      const value = params[key];
      // 空白はQueryStringに入れない
      if (value) {
        query[key] = value;
      }
    });
    //URLをパラメータ付きに書き換え
    router.replace({ query: query });
  };

  return { initialForm, pathParameter, router, setQueryString };
};
