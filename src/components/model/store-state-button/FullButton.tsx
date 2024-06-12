import { FC } from 'react';

import { BaseButton, BaseButtonProps } from '@/components/ui';

export type StoreStateButtonProps = {
  isSelected: boolean;
} & BaseButtonProps;

export const FullButton: FC<StoreStateButtonProps> = ({
  isSelected,
  ...props
}) => {
  return (
    <BaseButton
      colorScheme={`${isSelected ? 'red' : 'gray'}`}
      p={4}
      px={8}
      rounded="full"
      size="lg"
      variant={`${isSelected ? 'solid' : 'outline'}`}
      {...props}
    >
      満席
    </BaseButton>
  );
};
