import { IconButton, IconButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import { BaseText, BaseTooltip } from '@/components/ui';
import { BaseImage } from '@/components/ui/image';

export type MemoIconButtonProps = Omit<IconButtonProps, 'aria-label'> & {
  tooltipLabel: string;
};

export const MemoIconButton: FC<MemoIconButtonProps> = ({
  tooltipLabel,
  ...props
}) => {
  return (
    <BaseTooltip
      label={<BaseText whiteSpace="pre-wrap">{tooltipLabel}</BaseText>}
    >
      <IconButton aria-label="memo" bg="none" {...props}>
        <BaseImage alt="memo" h={4} src="/memoIcon.png" />
      </IconButton>
    </BaseTooltip>
  );
};
