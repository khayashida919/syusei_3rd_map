import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

export type PasswordButtonProps = Omit<IconButtonProps, 'aria-label'> & {
  isHiddenPw: boolean;
};
export const PasswordButton: FC<PasswordButtonProps> = ({
  isHiddenPw,
  ...props
}) => {
  return (
    <IconButton
      aria-label="password_hidden"
      bg="none"
      icon={isHiddenPw ? <ViewOffIcon /> : <ViewIcon />}
      {...props}
    />
  );
};
