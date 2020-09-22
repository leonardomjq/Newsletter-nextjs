import Head from 'next/head';

import Twitter from '../public/twitter.svg';
import Discord from '../public/discord.svg';

import { Navbar, NavItem } from '../components/Navbar';
import Line from '../components/Line';
import Hero from '../components/Hero';
import Main from '../components/Body';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Gold Nuggets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Line />
      <Navbar>
        <NavItem icon={<Twitter />} />
        <NavItem icon={<Discord />} />
      </Navbar>
      <Hero />
      <Main />
    </div>
  );
}
