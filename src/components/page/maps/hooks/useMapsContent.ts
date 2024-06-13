import { useEffect, useState } from 'react';

import { Store, StoreState } from '@/entity/store';
import { useSupabase } from '@/network/supabase';

export const useMapsContent = () => {
  const { fetchStores, subscribeStores, updateStore } = useSupabase();

  const [selectedStore, setSelectedStore] = useState<Store>();
  const [stores, setStores] = useState<Store[]>([]);

  const fetch = async () => {
    const response = await fetchStores();
    if (!response.data) return [];
    setStores(response.data);
    return response.data;
  };

  const onChangeStores = async () => {
    const fetchedStores = await fetch();
    const store = fetchedStores?.find(
      (store) => store.id === selectedStore?.id,
    );
    setSelectedStore(store);
  };

  useEffect(() => {
    if (stores.length == 0) fetch(); //初回データ取得
    subscribeStores(onChangeStores);
  }, [selectedStore]);

  const onSelectStore = (store?: Store) => {
    setSelectedStore(store);
  };

  const onClickLogo = () => {
    console.log(selectedStore);
  };

  const onChangeStoreState = (state: StoreState) => {
    if (!selectedStore) return;
    updateStore(selectedStore.id, state);
  };

  return {
    onChangeStoreState,
    onClickLogo,
    onSelectStore,
    selectedStore,
    stores,
  };
};
