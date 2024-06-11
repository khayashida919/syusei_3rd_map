import { ModalHeader, ModalHeaderProps } from '@chakra-ui/react';
import { FC } from 'react';

export type BaseModalHeaderProps = ModalHeaderProps;

export const BaseModalHeader: FC<BaseModalHeaderProps> = ({
  children,
  ...props
}) => {
  return (
    <ModalHeader
      borderBottom="1px"
      borderBottomColor="gray.300"
      textAlign="center"
      {...props}
    >
      {children}
    </ModalHeader>
  );
};
