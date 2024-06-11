import { BoxProps, Image, VStack } from '@chakra-ui/react';
import PackageJson from 'package.json';
import { FC } from 'react';

import { BaseText } from '@/components/ui';

type SideBarProps = BoxProps;

export const SideBar: FC<SideBarProps> = ({ ...props }) => {
  return (
    <VStack
      align="start"
      bgColor="white"
      h="100vh"
      left="0"
      maxW="9rem"
      minW="9rem"
      overflowY="auto"
      p="0rem"
      position="fixed"
      top="0"
      zIndex={'sticky'}
      {...props}
    >
      <Image
        _hover={{ bg: 'gray.50' }}
        alt="川重車両コンポ"
        cursor="pointer"
        p="1rem"
        src="/logo.png"
      />

      <BaseText fontSize="x-small" fontWeight="bold" p="1rem" textColor="gray">
        v{PackageJson.version}
      </BaseText>
    </VStack>
  );
};
