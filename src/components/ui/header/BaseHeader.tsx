import { HStack, StackProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export type BaseHeaderProps = {
  children?: ReactNode;
} & StackProps;

export const BaseHeader: FC<BaseHeaderProps> = ({ children, ...props }) => (
  <HStack
    bgColor="white"
    h="3.5rem"
    justifyContent="end"
    opacity={0.9}
    p="1rem"
    position="sticky"
    spacing="1.5rem"
    top="0"
    w="full"
    zIndex={'docked'}
    {...props}
  >
    {children}
  </HStack>
);
