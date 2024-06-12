import { FC } from 'react';

import { StoreStateButtonProps } from '@/components/model/store-state-button/FullButton';
import { BaseButton } from '@/components/ui';

export const EmptyButton: FC<StoreStateButtonProps> = ({
  isSelected,
  ...props
}) => {
  return (
    <BaseButton
      colorScheme={`${isSelected ? 'green' : 'gray'}`}
      p={4}
      px={8}
      rounded="full"
      size="lg"
      variant={`${isSelected ? 'solid' : 'outline'}`}
      {...props}
    >
      空席有
    </BaseButton>
  );
};
