import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseImage } from '@/components/ui/image';

export type DeleteIconButtonProps = Omit<IconButtonProps, 'aria-label'> & {
  isConfirm?: boolean;
};

export const DeleteIconButton: FC<DeleteIconButtonProps> = ({
  isConfirm,
  onClick,
  ...props
}) => {
  const _onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isConfirm) {
      if (confirm('削除しますか？')) {
        onClick?.(e);
      }
    } else {
      onClick?.(e);
    }
  };

  return (
    <IconButton aria-label="delete" bg="none" onClick={_onClick} {...props}>
      <BaseImage alt="delete" h={4} src="/deleteIcon.png" />
    </IconButton>
  );
};
