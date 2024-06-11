import { Center } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseSpinner } from '@/components/ui/spinner';
import { BaseTd, BaseTr, BaseTrProps } from '@/components/ui/table/base-table';

export type LoadingTrProps = BaseTrProps & {
  tdColSpan?: number;
};

export const LoadingTr: FC<LoadingTrProps> = ({ tdColSpan, ...props }) => {
  return (
    <BaseTr height="30rem" {...props}>
      <BaseTd colSpan={tdColSpan} textAlign="center">
        <Center>
          <BaseSpinner />
        </Center>
      </BaseTd>
    </BaseTr>
  );
};
