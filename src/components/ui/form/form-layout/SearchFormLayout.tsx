import { Box, HStack, Spacer, StackProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { PrimaryButton } from '@/components/ui/button';
import { BaseText } from '@/components/ui/text';

export type BaseSearchFormProps<T> = {
  defaultValues?: T;
  isLoading: boolean;
  onSearch: (values: T) => void;
};

type SearchFormLayoutProps = {
  children: ReactNode;
  isLoading: boolean;
  onClickSearch?: VoidFunction;
} & StackProps;

export const SearchFormLayout: FC<SearchFormLayoutProps> = ({
  children,
  isLoading = false,
  onClickSearch,
  ...props
}) => {
  return (
    <Box bgColor="white" p="2rem" rounded="lg">
      <HStack>
        <HStack alignItems="center" gap="1rem" spacing="0" {...props}>
          {children}
        </HStack>
        <Spacer />
        <PrimaryButton
          isLoading={isLoading}
          type="submit"
          w="6rem"
          onClick={onClickSearch}
        >
          <BaseText textColor="white">検索</BaseText>
        </PrimaryButton>
      </HStack>
    </Box>
  );
};
