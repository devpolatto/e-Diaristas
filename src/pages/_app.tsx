import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core';

import Header from 'ui/components/Header';

import '@styles/globals.css';
import theme from 'ui/themes/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>e-diaristas</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400;1,500&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="/fonts/tw-icons/css/treinaweb-icons.css" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
