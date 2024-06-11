import { TableHeadProps, Thead } from '@chakra-ui/react';
import { FC } from 'react';

type BaseTheadProps = TableHeadProps;

export const BaseThead: FC<BaseTheadProps> = ({ children, ...props }) => {
  return (
    <Thead bgColor="secondary" {...props}>
      {children}
    </Thead>
  );
};
