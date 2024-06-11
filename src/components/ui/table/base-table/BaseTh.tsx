import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { HStack, TableColumnHeaderProps, Th } from '@chakra-ui/react';
import { FC } from 'react';

type BaseThProps = TableColumnHeaderProps & {
  headerKey?: string;
  isSort?: boolean;
  sortColumn?: string;
};

export const BaseTh: FC<BaseThProps> = ({
  children,
  headerKey,
  isSort,
  sortColumn,
  ...props
}) => {
  return (
    <Th
      cursor={`${isSort && 'pointer'}`}
      textAlign="center"
      {...props}
      px="0.7rem"
      py="0.25rem"
    >
      <HStack>
        {children}
        {isSort &&
          (sortColumn === headerKey ? <ChevronDownIcon /> : <ChevronUpIcon />)}
      </HStack>
    </Th>
  );
};
