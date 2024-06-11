import { FC } from 'react';

import { BaseButton, BaseButtonProps } from '@/components/ui';

export type PrimaryButtonProps = BaseButtonProps;

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <BaseButton colorScheme="primary" {...props}>
      {children}
    </BaseButton>
  );
};
