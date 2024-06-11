import { Box, FormControl, FormControlProps, HStack } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseFormErrorMessage, BaseFormLabel } from '@/components/ui';

export type HorizonFormControlProps = Omit<FormControlProps, 'label'> & {
  errorMessage?: string;
  label?: string;
};

export const HorizonFormControl: FC<HorizonFormControlProps> = ({
  children,
  errorMessage,
  isInvalid,
  label,
  ...props
}) => {
  return (
    <FormControl {...props} isInvalid={!!errorMessage || isInvalid}>
      <HStack alignItems="baseline" spacing="1rem">
        <BaseFormLabel minW={`${label?.length}rem`}>{label}</BaseFormLabel>
        <Box w="full">
          <Box>{children}</Box>
          <BaseFormErrorMessage>{errorMessage}</BaseFormErrorMessage>
        </Box>
      </HStack>
    </FormControl>
  );
};
