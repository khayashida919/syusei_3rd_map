import { FormLabel, FormLabelProps } from '@chakra-ui/react';
import { FC } from 'react';

type BaseFormLabelProps = FormLabelProps;

export const BaseFormLabel: FC<BaseFormLabelProps> = ({
  children,
  ...props
}) => {
  return (
    <FormLabel fontWeight="bold" m="0" {...props}>
      {children}
    </FormLabel>
  );
};
