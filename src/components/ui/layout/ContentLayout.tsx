import { Box, StackProps, VStack } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type ContentLayoutProps = {
  footer?: ReactElement;
  header?: ReactElement;
} & StackProps;

export const ContentLayout: FC<ContentLayoutProps> = ({
  children,
  footer,
  header,
  ...props
}) => {
  return (
    <VStack align="start" minH="full" spacing={0} w="full" {...props}>
      {header}
      <Box minH="full" minW="full">
        {children}
      </Box>
      {footer && footer}
    </VStack>
  );
};
