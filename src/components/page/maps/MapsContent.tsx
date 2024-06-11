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

  const targets = [{ lat: 34.69484857802048, lng: 135.19073799720928 }];

  // const handleApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
  //   const bounds = new maps.LatLngBounds();

  //   targets.forEach((target) => {
  //     const marker = new maps.Marker({
  //       map,
  //       position: { lat: target.lat, lng: target.lng },
  //     });
  //     bounds.extend(marker.position);
  //   });
  //   map.fitBounds(bounds);
  // };

  const handleApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
    new maps.Marker({
      map,
      position: targets[0],
    });
  };

  return (
    <ContentLayout>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_API_KEY! }}
        defaultCenter={{
          lat: 34.694370367298454,
          lng: 135.19279968548972,
        }}
        defaultZoom={17}
        onGoogleApiLoaded={handleApiLoaded}
      ></GoogleMapReact>
    </ContentLayout>
  );
};
