import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: {
      300: '#faf7ef',
    },
    gray: {
      700: '#2c2c2c',
      900: '#323338',
    },
    blue: {
      '500': '#67effb',
    },
    purple: {
      '500': '#8867fb',
    },
  },
  fonts: {
    heading: 'Roboto Mono',
    body: 'Roboto Mono',
  },
  styles: {
    global: {
      body: {
        bg: 'white.300',
        color: 'gray.900',
      },
    },
  },
});
