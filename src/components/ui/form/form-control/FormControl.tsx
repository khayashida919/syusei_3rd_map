import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
} from '@chakra-ui/react';
import { FC } from 'react';

import { BaseFormErrorMessage, BaseFormLabel } from '@/components/ui';

type FormControlProps = ChakraFormControlProps & {
  errorMessage?: string;
  label?: string;
};

export const FormControl: FC<FormControlProps> = ({
  children,
  errorMessage,
  label,
  ...props
}) => {
  return (
    <ChakraFormControl {...props} isInvalid={!!errorMessage}>
      <BaseFormLabel>{label}</BaseFormLabel>
      {children}
      {errorMessage && (
        <BaseFormErrorMessage>{errorMessage}</BaseFormErrorMessage>
      )}
    </ChakraFormControl>
  );
};
