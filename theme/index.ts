import { ActionIcon, Loader, createTheme } from '@mantine/core';

export const myTheme = createTheme({
  primaryColor: 'indigo',
  defaultRadius: 'md',
  focusRing: 'always',
  fontFamily: 'Open Sans, sans-serif',
  headings: { fontFamily: 'Open Sans, sans-serif' },
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'subtle',
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        type: 'bars',
      },
    }),
  },
  colors: {
    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
    'ocean-orange': ['#FFAD5A', '#FFA04F', '#FF9344', '#FF8639', '#FF7930', '#F96D28', '#F06121', '#E6561C', '#DC4C18', '#D04314'],
  },
});
