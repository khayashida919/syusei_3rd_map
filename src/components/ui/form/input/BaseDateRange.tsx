import { HStack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { VerticalFormControl } from '@/components/ui';

type BaseDateRangeProps = { children: ReactNode; label: string };

export const BaseDateRange: FC<BaseDateRangeProps> = ({ children, label }) => {
  return (
    <VerticalFormControl label={label} w="25rem">
      <HStack>{children}</HStack>
    </VerticalFormControl>
  );
};
