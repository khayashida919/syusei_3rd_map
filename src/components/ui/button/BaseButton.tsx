import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

export type BaseButtonProps = ButtonProps;

export const BaseButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      _active={{
        transform: 'scale(0.95)',
      }}
      size="sm"
      {...props}
    >
      {children}
    </Button>
  );
};
