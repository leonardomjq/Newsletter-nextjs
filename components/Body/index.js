import React from 'react';
import Card from '../Card';
import InfoBox from '../Box';
import styles from './Body.module.scss';

export default function Body() {
  return (
    <main>
      <InfoBox>+1000 Reactions</InfoBox>
      <section>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>
              Featured <strong>#2</strong> on{' '}
              <a
                href="https://dev.to/leomjaques/my-fav-resources-being-a-freelancer-as-a-side-hustle-15ml"
                target="_blank"
              >
                Dev.to
              </a>{' '}
              August.
            </h2>
          </div>
          <img src="/spaceship.png" alt="Spaceship on ignition" />
        </div>
      </section>
      <section className={styles.cardList}>
        <Card
          date="Aug 6"
          text="Dude that is awesome! Thanks especially for the API resource😍 It's a killer. One resource page to rule them 😎"
          name="Anik Khan"
          img="./user1.jpg"
        />
        <Card
          date="Aug 5"
          text="OMG this has me hooked!! Just so cool!!<3"
          name="Shristi Singh"
          img="./user2.jpeg"
        />
        <Card
          date="Aug 6"
          text="Very nice list—and refreshing to see one that's geared towards productivity instead of being 'another list of X'. 👏"
          name="JSn1nj4‍‍👨‍💻"
          img="./user3.jpeg"
        />
        <Card
          date="Aug 18"
          text="Best list like this I have seen honestly. I actually learned some new things, have some new stuff to try out. Not click bait I have read 500x times, honestly thank you my dude."
          name="Thomas Leon Highbaugh"
          img="./user4.jpeg"
        />
        <Card
          date="Aug 5"
          text="Thank you, Leonardo, for mentioning my site tablericons.com"
          name="Csaba Kissi"
          img="./user5.jpeg"
        />
        <Card
          date="Aug 6"
          text="Thank you, Leonardo. That list is full of gold nuggets. I did not know all of them. Thanks for sharing it with us."
          name="Stefan Natter 🇦🇹👨🏻‍💻"
          img="./user6.jpeg"
        />
        <Card
          date="Aug 5"
          text="Thanks! Those are awesome tools that I didnt know existed."
          name="Mark Gagnon"
          img="./user7.jpeg"
        />
        <Card
          date="Aug 11"
          text="Thanks for the heads up on vercel!! Love it, so quick to get set up with a custom domain and my github account. Perfect for what I'm working on at the moment!!"
          name="kilroyandy"
          img="./user8.jpg"
        />
        <Card
          date="Aug 9"
          text="Thanks so much for putting this beautiful list together, a lot of these look like real game changers!"
          name="Daniel Hintz"
          img="./user9.jpeg"
        />
        <Card
          date="Aug 9"
          text="Excellent curation! Thanks!"
          name="Orin Fletcher"
          img="./user10.jpeg"
        />
      </section>
    </main>
  );
}
