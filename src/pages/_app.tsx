import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useMemo } from 'react';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';

import { CHAKRA_THEME } from '@/styles/chakraTheme';

const DynamicImporter = dynamic(
  () => import('@/components/model/app/DynamicImporter'),
  {
    ssr: false,
  },
);

const MyApp: NextPage<AppProps> = ({
  Component,
  pageProps: { ...pageProps },
}: AppProps) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 300000,
          },
        },
      }),
    [],
  );

  return (
    <>
      <Head>
        <title>三部会ダッシュボード</title>
      </Head>
      <DynamicImporter>
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={CHAKRA_THEME}>
              <Component {...pageProps} />
            </ChakraProvider>
          </QueryClientProvider>
        </CookiesProvider>
      </DynamicImporter>
    </>
  );
};

export default MyApp;
