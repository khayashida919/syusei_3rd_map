import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseText } from '@/components/ui';

export const FullLabel: FC = () => {
  return (
    <Box bgColor="red.500" p={4} px={8} rounded="full">
      <BaseText fontWeight="bold" textColor="white">
        満席
      </BaseText>
    </Box>
  );
};
