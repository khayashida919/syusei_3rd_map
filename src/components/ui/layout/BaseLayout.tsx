import { HStack, StackProps } from '@chakra-ui/react';
import { FC } from 'react';

export const BaseLayout: FC<StackProps> = ({ children, ...props }) => {
  return (
    <HStack align="top" minH="100vh" spacing="0" {...props}>
      {children}
    </HStack>
  );
};
