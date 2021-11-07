import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle` ${reset}; `;

export default function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
}