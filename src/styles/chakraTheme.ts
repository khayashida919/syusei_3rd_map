import { extendTheme } from '@chakra-ui/react';

const chakraComponentStyle = {
  Table: {
    variants: {
      striped: {
        tbody: {
          tr: {
            _even: {
              td: {
                border: '1px solid #E2E8F0',
              },
            },
            _odd: {
              td: {
                border: '1px solid #E2E8F0',
              },
            },
          },
        },
        tfoot: {
          tr: {
            td: {
              border: '1px solid #E2E8F0',
            },
          },
        },
        thead: {
          tr: {
            th: {
              border: '1px solid #E2E8F0',
            },
          },
        },
      },
    },
  },
};

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
      body: {
        bgColor: 'bg_gray_1',
      },
    },
  },
});
