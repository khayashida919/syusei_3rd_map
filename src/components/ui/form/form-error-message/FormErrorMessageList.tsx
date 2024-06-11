import { Stack, StackProps } from '@chakra-ui/react';
import type { FC } from 'react';

import { BaseFormErrorMessage } from '@/components/ui';

type FormErrorMessageListPropsType = {
  errorMessage: string | string[];
} & StackProps;

export const FormErrorMessageList: FC<FormErrorMessageListPropsType> = ({
  errorMessage,
  ...props
}) => {
  return (
    <Stack {...props}>
      {Array.isArray(errorMessage) ? (
        errorMessage.map((message) => (
          <BaseFormErrorMessage key={message}>{message}</BaseFormErrorMessage>
        ))
      ) : (
        <BaseFormErrorMessage>{errorMessage}</BaseFormErrorMessage>
      )}
    </Stack>
  );
};
