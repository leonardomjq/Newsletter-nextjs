import '../styles/globals.scss';
// import { StaticKitProvider } from '@statickit/react';

function MyApp({ Component, pageProps }) {
  // <StaticKitProvider site="{8643fac617}">
  return <Component {...pageProps} />;
  {
    /* </StaticKitProvider>; */
  }
}

export default MyApp;
