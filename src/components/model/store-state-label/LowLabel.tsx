import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseText } from '@/components/ui';

export const LowLabel: FC = () => {
  return (
    <Box bgColor="yellow.200" p={4} px={8} rounded="full">
      <BaseText fontWeight="bold" textColor="gray.800">
        あと少し
      </BaseText>
    </Box>
  );
};
