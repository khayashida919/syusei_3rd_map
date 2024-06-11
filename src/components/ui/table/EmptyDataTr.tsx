import { FC } from 'react';

import { BaseTd, BaseTr, BaseTrProps } from '@/components/ui/table/base-table';

export type EmptyDataTrProps = BaseTrProps & {
  tdColSpan?: number;
  text?: string;
};

export const EmptyDataTr: FC<EmptyDataTrProps> = ({
  tdColSpan,
  text = 'データがありません',
  ...props
}) => {
  return (
    <BaseTr height="30rem" {...props}>
      <BaseTd colSpan={tdColSpan} textAlign="center">
        {text}
      </BaseTd>
    </BaseTr>
  );
};
