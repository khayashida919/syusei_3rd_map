import { Store } from '@/entity/store';

export const useMapsContent = () => {
  const stores: Store[] = [
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
  ];

  return { stores };
};
