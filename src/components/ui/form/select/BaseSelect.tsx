import { forwardRef, Select, SelectProps } from '@chakra-ui/react';

type BaseSelectProps = SelectProps;

export const BaseSelect = forwardRef<BaseSelectProps, 'select'>(
  ({ children, ...props }, ref) => {
    return (
      <Select {...props} ref={ref}>
        {children}
      </Select>
    );
  },
);
