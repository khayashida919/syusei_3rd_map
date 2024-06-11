import { TableRowProps, Tr } from '@chakra-ui/react';
import { FC } from 'react';

export type BaseTrProps = TableRowProps;

export const BaseTr: FC<BaseTrProps> = ({ children, ...props }) => {
  return <Tr {...props}>{children}</Tr>;
};
