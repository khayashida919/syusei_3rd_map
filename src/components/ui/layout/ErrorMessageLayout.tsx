import { VStack } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

import { BaseText } from '@/components/ui';

type ErrorMessageLayoutProps = {
  children: ReactElement;
  errorMessage?: string;
};

export const ErrorMessageLayout: FC<ErrorMessageLayoutProps> = ({
  children,
  errorMessage,
}) => {
  return (
    <VStack alignItems="start">
      {children}
      {errorMessage && (
        <BaseText color="red.500" fontSize="xx-small">
          {errorMessage}
        </BaseText>
      )}
    </VStack>
  );
};
