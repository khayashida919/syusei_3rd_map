import { Box, HStack, Link, Spacer, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import {
  EmptyButton,
  FullButton,
  LowButton,
} from '@/components/model/store-state-button';
import { useMapsContent } from '@/components/page/maps/hooks/useMapsContent';
import { BaseImage, BaseText, ContentLayout } from '@/components/ui';
import { GoogleMap, Marker } from '@/libs';

export const MapsContent: FC = () => {
  const {
    onChangeStoreState,
    onClickLogo,
    onSelectStore,
    selectedStore,
    stores,
  } = useMapsContent();

  return (
    <ContentLayout>
      <HStack position="absolute" spacing={0} top="1" zIndex={'docked'}>
        <BaseImage src="/logo.png" width={24} onClick={() => onClickLogo()} />
      </HStack>

      <GoogleMap
        onChildClick={(store) => onSelectStore(store)}
        onClick={() => onSelectStore(undefined)}
      >
        {stores.map((store) => (
          <Marker
            isSelected={selectedStore?.name === store.name ?? false}
            key={store.name}
            {...store}
          />
        ))}
      </GoogleMap>

      {selectedStore && (
        <Box
          bottom="2"
          key={JSON.stringify(selectedStore)} //https://github.com/facebook/react/issues/26713
          position="fixed"
          w="full"
          zIndex={'docked'}
        >
          <VStack
            alignItems="start"
            bgColor="white"
            borderColor="red.200"
            borderWidth={2}
            justifyContent="space-between"
            mx="0.5rem"
            p="1rem"
            rounded="lg"
            shadow="2xl"
            spacing={0}
          >
            <Link color="red.500" href={selectedStore.googleLink}>
              <BaseText fontSize="x-large" fontWeight="bold">
                {selectedStore.name}
              </BaseText>
            </Link>

            <BaseText fontSize="sm" textColor="gray">
              {selectedStore.address}
            </BaseText>

            <Spacer minH={6} />

            <HStack justifyContent="space-between" w="full">
              <FullButton
                isSelected={selectedStore.state === 'full'}
                onClick={() => onChangeStoreState('full')}
              />
              <LowButton
                isSelected={selectedStore.state === 'low'}
                onClick={() => onChangeStoreState('low')}
              />
              <EmptyButton
                isSelected={selectedStore.state === 'empty'}
                onClick={() => onChangeStoreState('empty')}
              />
            </HStack>
          </VStack>
        </Box>
      )}
    </ContentLayout>
  );
};
