import { Box, FormControl, FormControlProps, VStack } from '@chakra-ui/react';
import { FC, ReactNode, useMemo } from 'react';

import { BaseFormErrorMessage, BaseFormLabel } from '@/components/ui';

export type VerticalFormControlProps = Omit<FormControlProps, 'label'> & {
  errorMessage?: string;
  label?: string | ReactNode;
};

export const VerticalFormControl: FC<VerticalFormControlProps> = ({
  children,
  errorMessage,
  isInvalid,
  label,
  ...props
}) => {
  const Label = useMemo(() => {
    if (typeof label === 'string') {
      return (
        <BaseFormLabel minW={`${label?.length}rem`}>{label}</BaseFormLabel>
      );
    }
    return label;
  }, [label]);

  return (
    <FormControl {...props} isInvalid={!!errorMessage || isInvalid}>
      <VStack alignItems="start">
        {label && Label}
        <Box w="full">
          <Box>{children}</Box>
          <BaseFormErrorMessage>{errorMessage}</BaseFormErrorMessage>
        </Box>
      </VStack>
    </FormControl>
  );
};
