import { extendTheme } from '@chakra-ui/react';

const chakraComponentStyle = {};

export const CHAKRA_THEME = extendTheme({
  colors: {
    bg_gray_1: '#F2F2F7',
    primary: {
      '100': '#f8d9db',
      '200': '#f2b7ba',
      '300': '#ea8b91',
      '400': '#e57078',
      '50': '#fdf5f6',
      '500': '#dd4750',
      '600': '#d30e1b',
      '700': '#ad000b',
      '800': '#940009',
      '900': '#6e0007',
    },
  },
  components: { ...chakraComponentStyle },
  styles: {
    global: {
      //SafariだとMap選択時に青枠が付くので無効化
      '.gm-style iframe + div': {
        border: 'none !important',
      },
      //スクロールを禁止
      body: {
        bgColor: 'bg_gray_1',
        overflow: 'hidden',
      },
    },
  },
});
