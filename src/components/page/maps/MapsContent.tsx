import GoogleMapReact from 'google-map-react';
import { FC } from 'react';

import { ContentLayout } from '@/components/ui';

export type Props = {
  lat: number;
  lng: number;
  text: string;
};

export const MapsContent: FC = () => {
  // const {} = useMapsContent();

  const AnyReactComponent = (props: Props) => (
    <div>
      {props.lat}
      {props.lng}
    </div>
  );

  return (
    <ContentLayout>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={{
          lat: 10.99835602,
          lng: 77.01502627,
        }}
        defaultZoom={10}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </ContentLayout>
  );
};
