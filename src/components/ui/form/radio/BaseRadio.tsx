import { forwardRef, Radio, RadioProps } from '@chakra-ui/react';

export type BaseRadioProps = RadioProps;

export const BaseRadio = forwardRef<BaseRadioProps, 'input'>(
  ({ ...props }, ref) => {
    return <Radio size="lg" {...props} ref={ref} />;
  },
);
