import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonProps,
  Menu,
  MenuButton,
  MenuList,
  MenuProps,
} from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

export type BaseDropDownMenuProps = Omit<MenuProps, 'children'> & {
  buttonText?: string;
  menuButtonProps?: ButtonProps & { icon: ReactElement };
  menuList: ReactElement[];
};

export const BaseDropDownMenu: FC<BaseDropDownMenuProps> = ({
  buttonText,
  menuButtonProps,
  menuList,
  ...menuProps
}) => {
  return (
    <Menu {...menuProps}>
      <MenuButton
        _hover={{ bgColor: 'gray.100' }}
        as={Button}
        bgColor="white"
        height="2rem"
        rightIcon={<ChevronDownIcon />}
        {...menuButtonProps}
      >
        {buttonText}
      </MenuButton>
      <MenuList zIndex={'dropdown'}>{menuList.map((Menu) => Menu)}</MenuList>
    </Menu>
  );
};
