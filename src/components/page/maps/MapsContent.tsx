import { IconButton } from '@chakra-ui/react';
import GoogleMapReact from 'google-map-react';
import { FC, useState } from 'react';
import { IoIosPin } from 'react-icons/io';

import { ContentLayout } from '@/components/ui';

export type Store = {
  address: string;
  googleLink: string;
  lat: number;
  lng: number;
  memo: string;
  name: string;
};

type MarkerProps = Store & {
  isSelected: boolean;
};

//`GoogleMapReact`の仕様上`lat`と`lng`は必須Props
const Marker: FC<MarkerProps> = ({ isSelected, name }) => {
  return (
    <IconButton
      aria-label={name}
      colorScheme=""
      icon={
        <IoIosPin
          color={`${isSelected ? 'red' : 'gray'}`}
          size={isSelected ? 64 : 48}
        />
      }
      position="absolute"
      transform="translate(-50%, -50%)"
    />
  );
};

export const MapsContent: FC = () => {
  // const {} = useMapsContent();

  const [selectedStore, setSelectedStore] = useState<Store>();

  const stores: Store[] = [
    {
      address: '〒650-0001 兵庫県神戸市中央区加納町４丁目６−５',
      googleLink: 'https://maps.app.goo.gl/yNZEMzZhQw17LpUr5',
      lat: 34.695404800408795,
      lng: 135.1928602742905,
      memo: '',
      name: 'シュガーママのお店QUEEN',
    },
    {
      address:
        '〒650-0004 兵庫県神戸市中央区中山手通１丁目８−２０ 三宮ＳＫビル B1F',
      googleLink: 'https://maps.app.goo.gl/rjgSzbhHdpwXBi3R7',
      lat: 34.6950680111787,
      lng: 135.19264059999978,
      memo: '',
      name: 'ダイニングバー Zorome',
    },
  ];

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
    <ContentLayout>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_API_KEY! }}
        defaultCenter={{
          lat: 34.694370367298454,
          lng: 135.19279968548972,
        }}
        defaultZoom={17}
        onChildClick={(hoverKey: string, childProps: Store) => {
          setSelectedStore(childProps);
        }}
        onClick={() => {
          setSelectedStore(undefined);
        }}
        onGoogleApiLoaded={handleApiLoaded}
      >
        {stores.map((store) => (
          <Marker
            address={store.address}
            googleLink={store.googleLink}
            isSelected={
              selectedStore == null ? false : selectedStore?.name == store.name
            }
            key={store.name}
            lat={store.lat}
            lng={store.lng}
            memo={store.memo}
            name={store.name}
          />
        ))}
      </GoogleMapReact>
    </ContentLayout>
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
