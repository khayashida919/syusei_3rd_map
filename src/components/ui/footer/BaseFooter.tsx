import { Box, HStack, StackProps } from '@chakra-ui/react';
import { FC, ReactNode, useEffect, useState } from 'react';

export type BaseFooterProps = {
  children?: ReactNode;
} & StackProps;

export const BaseFooter: FC<BaseFooterProps> = ({ children, ...props }) => {
  const [isShow, setIsShow] = useState(true);
  const [, setPrevScrollY] = useState(0);

  const onScroll = () => {
    const scrollY = window.scrollY;
    setPrevScrollY((prevScrollY) => {
      setIsShow(scrollY === 0 || prevScrollY < scrollY);
      return scrollY;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Box
      bottom="1.5"
      h="4rem"
      position="sticky"
      transform={isShow ? 'none' : 'translateY(100%)'}
      /* アニメーションを入れるとガクガクするため一旦コメントアウト
      transition={`all 200ms ${isShow ? 'ease-in' : 'ease-out'}`} */
      visibility={isShow ? 'visible' : 'hidden'}
      w="full"
      zIndex={'docked'}
      {...props}
    >
      <HStack
        bgColor="white"
        justifyContent="space-between"
        mx="0.5rem"
        p="0.5rem"
        px="2rem"
        rounded="full"
        shadow="2xl"
      >
        {children}
      </HStack>
    </Box>
  );
};
