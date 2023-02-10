import 'styled-components';
import theme from './theme';

export type Theme = typeof theme;

export interface CaseProps {
  background: string;
  marginBottom: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
