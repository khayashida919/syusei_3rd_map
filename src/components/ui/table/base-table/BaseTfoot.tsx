import { TableFooterProps, Tfoot } from '@chakra-ui/react';
import { FC } from 'react';

type BaseTfootProps = TableFooterProps;

export const BaseTfoot: FC<BaseTfootProps> = ({ children, ...props }) => {
  return (
    <Tfoot bgColor="gray.500" {...props}>
      {children}
    </Tfoot>
  );
};
