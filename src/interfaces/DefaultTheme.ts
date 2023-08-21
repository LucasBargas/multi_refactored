import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      backgroundColor: string;
      blueColor: string;
      orangeColor: string;
      orangeColorHover: string;
      lightColor: string;
      fontColor: string;
      secondaryFontColor: string;
    };
  }
}
