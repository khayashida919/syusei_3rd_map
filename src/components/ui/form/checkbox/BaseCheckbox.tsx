import { Checkbox, CheckboxProps, forwardRef } from '@chakra-ui/react';

import { BaseFormLabel } from '@/components/ui/form/form-label';

export type BaseCheckboxProps = CheckboxProps;

export const BaseCheckbox = forwardRef<BaseCheckboxProps, 'input'>(
  ({ children, ...props }, ref) => {
    return (
      <Checkbox colorScheme="blue" ref={ref} size="lg" {...props}>
        <BaseFormLabel pr="1rem">{children}</BaseFormLabel>
      </Checkbox>
    );
  },
);
