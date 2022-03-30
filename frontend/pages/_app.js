import CustomThemeProvider from 'src/theme/CustomThemeProvider';
import createEmotionCache from 'src/theme/CreateEmotionCache';
import { CacheProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
