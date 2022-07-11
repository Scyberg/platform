import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
