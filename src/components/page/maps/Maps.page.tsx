import { NextPage } from 'next';

import { MapsContent } from '@/components/page/maps/MapsContent';
import { BaseLayout } from '@/components/ui';

const MapsPage: NextPage = () => {
  return (
    <BaseLayout>
      <MapsContent />
    </BaseLayout>
  );
};

export default MapsPage;
