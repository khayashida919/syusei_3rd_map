import { FC } from 'react';

import { StoreStateButtonProps } from '@/components/model/store-state-button';
import { BaseButton } from '@/components/ui';

export const LowButton: FC<StoreStateButtonProps> = ({
  isSelected,
  ...props
}) => {
  return (
    <BaseButton
      colorScheme={`${isSelected ? 'yellow' : 'gray'}`}
      p={4}
      px={8}
      rounded="full"
      size="lg"
      variant={`${isSelected ? 'solid' : 'outline'}`}
      {...props}
    >
      わずか
    </BaseButton>
  );
};
