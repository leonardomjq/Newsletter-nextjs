import Head from 'next/head';
import { Navbar, NavItem } from '../components/Navbar';
import Twitter from '../public/twitter.svg';
import Discord from '../public/discord.svg';
import Line from '../components/Line';
import Hero from '../components/Hero';
import Main from '../components/Body';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Newsletter</title>
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
