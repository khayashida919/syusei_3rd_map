import { FC } from 'react';

import { BaseButton, BaseButtonProps } from '@/components/ui';

export type TextButtonProps = BaseButtonProps;

export const TextButton: FC<TextButtonProps> = ({ children, ...props }) => {
  return (
    <BaseButton variant="ghost" {...props}>
      {children}
    </BaseButton>
  );
};
