import { Tooltip, TooltipProps } from '@chakra-ui/react';
import { FC } from 'react';

export const BaseTooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <Tooltip
      hasArrow
      bgColor="white"
      closeOnClick={false}
      color="black"
      placement="top-start"
      px="1rem"
      py="0.5rem"
      {...props}
    >
      {children}
    </Tooltip>
  );
};
