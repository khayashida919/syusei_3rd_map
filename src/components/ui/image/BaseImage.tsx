import { Image, ImageProps } from '@chakra-ui/react';
import { FC } from 'react';

type Props = ImageProps;

export const BaseImage: FC<Props> = ({ src, ...props }) => {
  return <Image src={src} {...props} />;
};
