import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' dir='ltr'>
      <Head />
      <body className='dark:bg-slate-800 bg-white text-slate-800 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
