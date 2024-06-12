import { IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { IoIosPin } from 'react-icons/io';

import { Store } from '@/entity/store';

export type MarkerProps = Store & {
  isSelected: boolean;
};

//`GoogleMapReact`の仕様上`lat`と`lng`は必須Props
export const Marker: FC<MarkerProps> = ({ isSelected, name }) => {
  return (
    <IconButton
      aria-label={name}
      colorScheme=""
      icon={
        <IoIosPin
          color={`${isSelected ? '#E53E3E' : 'gray'}`}
          size={isSelected ? 64 : 48}
        />
      }
      position="absolute"
      transform="translate(-50%, -50%)"
    />
  );
};
