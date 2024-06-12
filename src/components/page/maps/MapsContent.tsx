import { Box, HStack, Link, Spacer, VStack } from '@chakra-ui/react';
import { FC, useState } from 'react';

import {
  EmptyLabel,
  FullLabel,
  LowLabel,
} from '@/components/model/store-state-label';
import { useMapsContent } from '@/components/page/maps/hooks/useMapsContent';
import { BaseImage, BaseText, ContentLayout } from '@/components/ui';
import { Store } from '@/entity/store';
import { GoogleMap, Marker } from '@/libs';

export const MapsContent: FC = () => {
  const { stores } = useMapsContent();

  const [selectedStore, setSelectedStore] = useState<Store>();

  return (
    <ContentLayout>
      <HStack position="absolute" spacing={0} top="1" zIndex={'docked'}>
        <BaseImage src="/logo.png" width={24} />
      </HStack>

      <GoogleMap
        onChildClick={(store) => {
          setSelectedStore(store);
        }}
        onClick={() => {
          setSelectedStore(undefined);
        }}
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
          position="absolute"
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
            px="2rem"
            rounded="lg"
            shadow="2xl"
            spacing={0}
          >
            <BaseText fontSize="x-large" fontWeight="bold">
              {selectedStore.name}
            </BaseText>
            <BaseText fontSize="md" textColor="gray">
              {selectedStore.address}
            </BaseText>

            <Spacer minH={6} />

            <HStack justifyContent="space-between" w="full">
              <Link
                color="red"
                fontSize="sm"
                fontWeight="bold"
                href={selectedStore.googleLink}
              >
                Google マップで見る
              </Link>
              {selectedStore.state === 'full' && <FullLabel />}
              {selectedStore.state === 'low' && <LowLabel />}
              {selectedStore.state === 'empty' && <EmptyLabel />}
            </HStack>
          </VStack>
        </Box>
      )}
    </ContentLayout>
  );
};
