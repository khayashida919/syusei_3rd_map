import { forwardRef, Input, InputProps } from '@chakra-ui/react';

export type BaseDateInputProps = InputProps;

export const BaseDateInput = forwardRef<BaseDateInputProps, 'input'>(
  ({ ...props }, ref) => {
    return (
      <Input
        _hover={{ cursor: 'pointer' }}
        max="2999-12-31"
        type="date"
        {...props}
        ref={ref}
      />
    );
  },
);
