import type { FormErrorMessageProps } from '@chakra-ui/react';
import { FormErrorMessage } from '@chakra-ui/react';
import type { FC } from 'react';

type BaseFormErrorMessagePropsType = FormErrorMessageProps;

export const BaseFormErrorMessage: FC<BaseFormErrorMessagePropsType> = ({
  children,
  ...props
}) => {
  return (
    <FormErrorMessage fontSize="0.7rem" {...props}>
      {children}
    </FormErrorMessage>
  );
};
