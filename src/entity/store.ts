export type Store = {
  address: string;
  googleLink: string;
  lat: number;
  lng: number;
  memo: string;
  name: string;
  state: 'full' | 'empty' | 'low';
};
