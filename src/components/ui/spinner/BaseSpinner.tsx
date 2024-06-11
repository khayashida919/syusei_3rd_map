import { Center, Spinner, SpinnerProps } from '@chakra-ui/react';
import { FC } from 'react';

type Props = SpinnerProps;

export const BaseSpinner: FC<Props> = ({ ...props }) => {
  return (
    <Center {...props}>
      <Spinner size="xl" />
    </Center>
  );
};
