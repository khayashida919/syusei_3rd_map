import { FC } from 'react';

import { BaseButton, BaseButtonProps } from '@/components/ui';

export type SecondaryButtonProps = BaseButtonProps;

export const SecondaryButton: FC<SecondaryButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <BaseButton colorScheme="secondary" {...props}>
      {children}
    </BaseButton>
  );
};
