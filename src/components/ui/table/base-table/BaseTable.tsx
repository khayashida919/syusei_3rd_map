import { Box, Table, TableProps } from '@chakra-ui/react';
import { FC } from 'react';

export type BaseTableProps = TableProps;

export const BaseTable: FC<BaseTableProps> = ({ children, ...props }) => {
  return (
    <Box bgColor="white" rounded="lg">
      <Table variant="striped" {...props}>
        {children}
      </Table>
    </Box>
  );
};
