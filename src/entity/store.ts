export type Store = {
  address: string;
  googleLink: string;
  id: number;
  lat: number;
  lng: number;
  memo: string;
  name: string;
  state: StoreState;
};

export type StoreState = 'full' | 'empty' | 'low';
