import { Heading, HeadingProps } from '@chakra-ui/react';
import { FC } from 'react';

type BaseHeadingProps = HeadingProps;

export const BaseHeading: FC<BaseHeadingProps> = ({ ...props }) => {
  return <Heading my="1rem" size="md" {...props}></Heading>;
};
