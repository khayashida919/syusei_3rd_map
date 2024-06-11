import { forwardRef, Input, InputProps } from '@chakra-ui/react';

export type BaseInputProps = InputProps;

export const BaseInput = forwardRef<BaseInputProps, 'input'>(
  ({ ...props }, ref) => {
    return <Input {...props} ref={ref} />;
  },
);
