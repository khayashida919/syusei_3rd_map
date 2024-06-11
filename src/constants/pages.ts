/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable sort-keys-fix/sort-keys-fix */

export type PageType = {
  path: string;
  title: string;
};

export type DetailPageType = {
  path: (id: string) => string;
  title: string;
};

export type PagesType = {
  top: PageType;
};

export const PAGES: PagesType = {
  top: { path: '/', title: 'トップ' },
} as const;
/* eslint-disable sort-keys-fix/sort-keys-fix */
