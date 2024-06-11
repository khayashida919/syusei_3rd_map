import { FC } from 'react';

import { BaseButton, BaseButtonProps, BaseText } from '@/components/ui';

export type DetailButtonProps = BaseButtonProps;

export const DetailButton: FC<DetailButtonProps> = ({ ...props }) => {
  return (
    <BaseButton
      borderWidth="2px"
      colorScheme="primary"
      p="1rem"
      variant="outline"
      {...props}
    >
      <BaseText colorScheme="primary">詳細</BaseText>
    </BaseButton>
  );
};
