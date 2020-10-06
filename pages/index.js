import Head from 'next/head';

import Twitter from '../public/twitter.svg';
// import Discord from '../public/discord.svg';

import { Navbar, NavItem } from '../components/Navbar';
import Line from '../components/Line';
import Hero from '../components/Hero';
import Main from '../components/Body';

export default function Home() {
  const twitterHandle = '@leokindacodes';
  const currentURL = 'https://bubblegum.dev';
  const siteName = 'Bubblegum.dev';
  const pageTitle = 'Bubblegum Newsletter';
  const description =
    'Stickiest newsletter out there. Subscribe to receive trending hot developer resources, weekly.';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/leonardomjq/Newsletter-nextjs/master/public/metatag.png"
          key="twitterimage"
        />
        <meta
          name="twitter:image:alt"
          content="Bubblegum Newsletter thumbnail cover"
        />
        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/leonardomjq/Newsletter-nextjs/master/public/metatag.png"
          key="ogimage"
        />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        {/* Include this to make the og:image larger */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-120728974-4"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-120728974-4');
        `,
          }}
        />
      </Head>
      <Line />
      <Navbar>
        <NavItem icon={<Twitter />} />
        {/* <NavItem icon={<Discord />} /> */}
      </Navbar>
      <Hero />
      <Main />
    </>
  );
}
