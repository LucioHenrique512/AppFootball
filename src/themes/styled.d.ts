import 'styled-components/native';
import {ThemeType} from './index';

export type Theme = ThemeType;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}