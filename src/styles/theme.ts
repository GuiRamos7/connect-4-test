import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      700: '#2c2c2c',
    },
    blue: {
      '500': '#67effb',
    },
    purple: {
      '500': '#8867fb',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: '#212121',
        color: '#f1f1f1',
      },
    },
  },
});
