import { SearchIcon } from '@chakra-ui/icons';
import { forwardRef, InputGroup, InputLeftElement } from '@chakra-ui/react';

import {
  BaseInput,
  BaseInputProps,
} from '@/components/ui/form/input/BaseInput';
import { BaseTooltip } from '@/components/ui/tooltip/BaseTooltip';

export type SearchInputProps = BaseInputProps & {
  tooltip?: string;
};

export const SearchInput = forwardRef<SearchInputProps, 'input'>(
  ({ tooltip, ...props }, ref) => {
    return (
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <BaseTooltip label={tooltip}>
          <BaseInput pl="2.2rem" {...props} ref={ref} />
        </BaseTooltip>
      </InputGroup>
    );
  },
);
