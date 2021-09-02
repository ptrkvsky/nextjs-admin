// 1. Import `extendTheme`
import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from '@chakra-ui/react';
import { styles } from '@/styles/theme/styles';
import { Button } from '@/styles/theme/components';
import { config } from './config';

export const theme = extendTheme(
  {
    // styles,
    fonts: {
      heading: `Gilroy Extrabold`,
      // body: `Adelle Regular`,
    },
    components: {
      Button,
    },
    colors: {
      purple: {
        '50': `#EFE5FF`,
        '100': `#D3B8FF`,
        '200': `#B68AFF`,
        '300': `#9A5CFF`,
        '400': `#7D2EFF`,
        '500': `#6100FF`,
        '600': `#4D00CC`,
        '700': `#3A0099`,
        '800': `#270066`,
        '900': `#130033`,
      },
      yellow: {
        '50': `#FFFEE5`,
        '100': `#FFFDB8`,
        '200': `#FFFC8A`,
        '300': `#FFFA5C`,
        '400': `#FFF92E`,
        '500': `#FFF800`,
        '600': `#CCC600`,
        '700': `#999500`,
        '800': `#666300`,
        '900': `#333200`,
      },
    },
    config,
  },
  withDefaultColorScheme({ colorScheme: `red` }),
  baseTheme,
);
