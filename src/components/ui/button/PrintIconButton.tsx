import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseImage } from '@/components/ui/image';

export type PrintIconButtonProps = Omit<IconButtonProps, 'aria-label'> & {
  isConfirm?: boolean;
};

export const PrintIconButton: FC<PrintIconButtonProps> = ({
  isConfirm,
  onClick,
  ...props
}) => {
  const _onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isConfirm) {
      if (confirm('印刷しますか？')) {
        onClick?.(e);
      }
    } else {
      onClick?.(e);
    }
  };

  return (
    <IconButton aria-label="print" bg="none" onClick={_onClick} {...props}>
      <BaseImage alt="print" h={4} src="/printIcon.png" />
    </IconButton>
  );
};
