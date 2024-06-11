import { TableContainer, Tfoot } from '@chakra-ui/react';
import { FC } from 'react';

import {
  BaseTable,
  BaseTbody,
  BaseTd,
  BaseTr,
} from '@/components/ui/table/base-table';
import { BaseText } from '@/components/ui/text';

export type HorizonAlignTableProps = {
  children?: React.ReactNode;
  colSpan?: number;
  fallbackHeight?: string;
  footer?: React.ReactNode;
  isLoading?: boolean;
};

export const HorizonAlignTable: FC<HorizonAlignTableProps> = ({
  children,
  colSpan,
  fallbackHeight,
  footer,
  isLoading,
}) => {
  return (
    <TableContainer bgColor="white" borderRadius="lg" padding="1rem" w="50%">
      <BaseTable variant="simple">
        <BaseTbody
          colSpan={colSpan}
          fallbackHeight={fallbackHeight}
          isLoading={isLoading}
        >
          {children}
        </BaseTbody>
        {footer && <Tfoot>{footer}</Tfoot>}
      </BaseTable>
    </TableContainer>
  );
};

export type HorizonAlignTableTrProps = {
  children: React.ReactNode;
  index: number;
  title: string | React.ReactNode;
};
export const HorizonAlignTableTr: FC<HorizonAlignTableTrProps> = ({
  children,
  index,
  title,
}) => {
  return (
    <BaseTr>
      <BaseTd
        alignItems="center"
        display="flex"
        gap="2rem"
        minH="4.5rem"
        pl="0rem"
      >
        <BaseText color="gray">{index}</BaseText>
        <BaseText>{title}</BaseText>
      </BaseTd>
      <BaseTd p="0">{children}</BaseTd>
    </BaseTr>
  );
};
