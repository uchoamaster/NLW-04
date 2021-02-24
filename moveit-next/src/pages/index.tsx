import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import style from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar start={0} end={600} current={500} />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
