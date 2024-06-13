import { createClient } from '@supabase/supabase-js';
import { Database } from 'database.types';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const useSupabase = () => {
  const fetchStores = async () => {
    const stores = await supabase.from('3rd-map').select('*');
    return stores;
  };

  const subscribeStores = async (onChangeStores: VoidFunction) => {
    await supabase.removeAllChannels();

    supabase
      .channel('3rd-map')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: '3rd-map',
        },
        () => onChangeStores(),
      )
      .subscribe();
  };

  return { fetchStores, subscribeStores };
};
