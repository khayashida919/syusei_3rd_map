import { TableBodyProps, Tbody } from '@chakra-ui/react';
import { FC } from 'react';

import { EmptyDataTr, LoadingTr } from '@/components/ui';

type BaseTbodyProps = TableBodyProps & {
  colSpan?: number;
  // ローディング中またはデータがない場合の高さ
  fallbackHeight?: string;
  isEmpty?: boolean;
  isLoading?: boolean;
};

export const BaseTbody: FC<BaseTbodyProps> = ({
  children,
  fallbackHeight,
  isEmpty,
  isLoading,
  ...props
}) => {
  if (isLoading) {
    return (
      <Tbody {...props}>
        <LoadingTr h={fallbackHeight} tdColSpan={props.colSpan} />
      </Tbody>
    );
  }

  if (isEmpty) {
    return (
      <Tbody {...props}>
        <EmptyDataTr h={fallbackHeight} tdColSpan={props.colSpan} />
      </Tbody>
    );
  }

  return <Tbody {...props}>{children}</Tbody>;
};
