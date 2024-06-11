import { TableCellProps, Td } from '@chakra-ui/react';
import { FC } from 'react';

type BaseTdProps = TableCellProps;

export const BaseTd: FC<BaseTdProps> = ({ children, ...props }) => {
  const isNumber = typeof children === 'number';
  return (
    <Td
      h="3rem"
      px="0.8rem"
      textAlign={`${isNumber ? 'end' : 'start'}`}
      {...props}
    >
      {children}
    </Td>
  );
};
