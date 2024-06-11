import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, BoxProps, HStack, IconButton } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

import { BaseFooter } from '@/components/ui/footer';
import { BaseText } from '@/components/ui/text';
import { PageInfo } from '@/types/table-search-types';

export type PageProps = {
  onPageChange: (page: number) => void;
  readonly pageInfo?: PageInfo;
};

type PagenateFooterProps = {
  buttons?: ReactElement;
  page: number;
} & PageProps &
  BoxProps;

export const PagenateFooter: FC<PagenateFooterProps> = ({
  buttons,
  onPageChange,
  page,
  pageInfo,
  ...props
}) => {
  return (
    <BaseFooter {...props}>
      {pageInfo ? (
        <HStack spacing="1rem">
          {pageInfo.canPrevious ? (
            <IconButton
              _hover={{ bg: 'whiteAlpha.0' }}
              aria-label={'戻る'}
              colorScheme="blue"
              icon={<ChevronLeftIcon h={8} w={8} />}
              onClick={() => {
                window.scrollTo({ behavior: 'smooth', top: 0 });
                onPageChange(--page);
              }}
            />
          ) : (
            <ChevronLeftIcon color="gray" h={8} w={8} />
          )}
          <BaseText fontSize="sm" fontWeight="bold">
            {pageInfo.from}~{pageInfo.to}
          </BaseText>
          <BaseText fontSize="xs" fontWeight="bold">
            全{pageInfo.allCount}件
          </BaseText>
          {pageInfo.canNext ? (
            <IconButton
              _hover={{ bg: 'whiteAlpha.0' }}
              aria-label={'次へ'}
              colorScheme="blue"
              icon={<ChevronRightIcon h={8} w={8} />}
              onClick={() => {
                window.scrollTo({ behavior: 'smooth', top: 0 });
                onPageChange(++page);
              }}
            />
          ) : (
            <ChevronRightIcon color="gray" h={8} w={8} />
          )}
        </HStack>
      ) : (
        <Box />
      )}

      {buttons}
    </BaseFooter>
  );
};
