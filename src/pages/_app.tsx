import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ErrorBoundary from '@/app/components/error-boundary';
import { BaseContainer } from '@/app/layout/base-container';
import { usePageName } from '@/shared/hooks/use-page-name';
import { store } from '@/shared/store';
import { PersistWrapper } from '@/shared/store/PersistWrapper';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const { title } = usePageName();
  return (
    <Provider store={store}>
      <PersistWrapper>
        <Head>
          {/* General */}
          <meta charSet='utf-8' />
          <meta name='language' content='en' />
          <link rel='manifest' href='/manifest.json' />
          <meta name='author' content='Ramin Rezaei' />
          <meta name='robots' content='index, follow' />
          <meta name='document-type' content='Public' />
          <meta name='resource-type' content='document' />
          <meta name='document-rating' content='General' />
          <meta http-equiv='content-language' content='en' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <link rel='icon' type='image/png' href='/favicon.png' />
          {/* Personal */}
          <meta name='copyright' content='2023' />
          <meta name='theme-color' content='#000' />
          <title>{`دستـ خطـ رامـینـــ | ${title}`}</title>
          <meta name='application-name' content='Ramin' />
          <link rel='canonical' href='https://www.ramiiin.ir' />
          <meta name='msapplication-TileColor' content='#000000' />
          <meta content='Ramin' name='apple-mobile-web-app-title' />
          <meta name='description' content='Ramin Rezaei Blog Page.' />
          <meta name='msapplication-navbutton-color' content='#000000' />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no'
          />
          <meta
            name='keywords'
            content='Ramin, Rezaei, Ramin Rezaei, fron-end, front-end developer, engineer, developer, React, Next, JavaScript, Blog'
          />
          {/* Pinned Sites */}
          <meta name='msapplication-starturl' content='/' />
          <meta name='msapplication-tooltip' content='Ramin' />
          {/* IOS */}
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta content='default' name='apple-mobile-web-app-status-bar-style' />
          <link sizes='76x76' rel='apple-touch-icon' href='/icons/logo76.png' />
          <link sizes='120x120' rel='apple-touch-icon' href='/icons/logo120.png' />
          <link sizes='152x152' rel='apple-touch-icon' href='/icons/logo152.png' />
          <link sizes='192x192' rel='apple-touch-icon' href='/icons/logo192.png' />
          {/* Windows */}
          <meta name='msapplication-config' content='browserconfig.xml' />
          <meta content='/icons/logo192.png' name='msapplication-TileImage' />
        </Head>
        <NextNprogress
          height={2}
          showOnShallow
          color='#29B6F6'
          stopDelayMs={200}
          startPosition={0.3}
          options={{ easing: 'ease', speed: 500, showSpinner: false }}
        />
        <ErrorBoundary>
          <ThemeProvider attribute='class'>
            <BaseContainer>
              <Component {...pageProps} />
            </BaseContainer>
          </ThemeProvider>
        </ErrorBoundary>
      </PersistWrapper>
    </Provider>
  );
}
