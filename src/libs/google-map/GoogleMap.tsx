import GoogleMapReact from 'google-map-react';
import { FC, ReactNode } from 'react';

import { Store } from '@/entity/store';
import { MarkerProps } from '@/libs';

export type GoogleMapProps = {
  children?: ReactNode;
  onChildClick: (store: Store) => void;
  onClick?: VoidFunction;
};

export const GoogleMap: FC<GoogleMapProps> = ({
  children,
  onChildClick,
  onClick,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
    // https://developers.google.com/maps/documentation/javascript/reference/map?hl=ja#MapOptions
    map.setOptions({
      clickableIcons: false,
      fullscreenControl: false,
      gestureHandling: 'greedy',
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_TOP,
      },
    });
  };

  return (
    <GoogleMapReact
      yesIWantToUseGoogleMapApiInternals
      bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_API_KEY! }}
      defaultCenter={{
        lat: 34.694370367298454,
        lng: 135.19279968548972,
      }}
      defaultZoom={17}
      style={{ borderWidth: 0 }}
      onChildClick={(hoverKey: string, childProps: MarkerProps) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { isSelected, ...store } = childProps;
        onChildClick(store);
      }}
      onClick={() => onClick && onClick()}
      onGoogleApiLoaded={handleApiLoaded}
    >
      {children}
    </GoogleMapReact>
  );
};

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
