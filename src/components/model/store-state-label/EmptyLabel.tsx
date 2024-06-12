import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseText } from '@/components/ui';

export const EmptyLabel: FC = () => {
  return (
    <Box borderColor="green.500" borderWidth={2} p={4} px={8} rounded="full">
      <BaseText fontWeight="bold" textColor="green.500">
        空席あり
      </BaseText>
    </Box>
  );
};
