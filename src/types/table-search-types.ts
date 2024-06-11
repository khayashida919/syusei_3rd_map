//ページング、並び替えキーをリクエストする用のタイプ
export type TableSearch = { page?: number; sortKey?: string };

export type PageInfo = {
  allCount: number;
  canNext: boolean;
  canPrevious: boolean;
  from: number;
  page: number;
  to: number;
};

//ページングした結果を受け取る用のタイプ
export type SearchResponse<T, U = undefined> = {
  pageInfo?: PageInfo;
  result: T;
  total?: Partial<U>;
  updateDate?: string;
};
