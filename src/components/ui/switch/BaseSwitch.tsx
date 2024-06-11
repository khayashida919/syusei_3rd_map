import { forwardRef, Switch, SwitchProps } from '@chakra-ui/react';

type Props = SwitchProps;

export const BaseSwitch = forwardRef<Props, 'input'>(({ ...props }, ref) => {
  return <Switch size="lg" {...props} ref={ref} />;
});
