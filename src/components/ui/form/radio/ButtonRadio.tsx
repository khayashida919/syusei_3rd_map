import { Box, useRadio } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { BaseText } from '@/components/ui/text';

export type RadioButtonPosition = 'first' | 'last' | '';

type ButtonRadioProps = {
  children: ReactNode;
  position?: RadioButtonPosition;
};

export const ButtonRadio: FC<ButtonRadioProps> = ({
  children,
  position,
  ...props
}) => {
  const { getInputProps, getRadioProps } = useRadio({ ...props });

  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        _checked={{
          bg: 'primary.500',
          borderColor: 'primary.200',
          color: 'white',
        }}
        border="1px solid #ccc"
        borderRadius={
          position === 'first'
            ? '0.3rem 0 0 0.3rem'
            : position === 'last'
              ? '0 0.3rem 0.3rem 0'
              : ''
        }
        cursor="pointer"
        px={4}
        py={1}
      >
        <BaseText fontSize="sm" fontWeight="bold">
          {children}
        </BaseText>
      </Box>
    </Box>
  );
};
