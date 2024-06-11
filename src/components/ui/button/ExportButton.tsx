import { useTheme } from '@chakra-ui/react';
import { FC } from 'react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

import { BaseButton, BaseButtonProps, BaseText } from '@/components/ui';

export type ExportButtonProps = BaseButtonProps;

export const ExportButton: FC<ExportButtonProps> = ({ ...props }) => {
  const theme = useTheme();

  return (
    <BaseButton
      borderWidth="2px"
      colorScheme="primary"
      leftIcon={
        <FaRegArrowAltCircleUp color={theme.colors.primary[500]} size={20} />
      }
      p="1rem"
      variant="outline"
      {...props}
    >
      <BaseText colorScheme="primary">エクスポート</BaseText>
    </BaseButton>
  );
};
