import React from 'react';
import { Countdown } from '../components/Countdown';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      
      <Component {...pageProps} />
     
    </ChallengesProvider>
  );
}

export default MyApp;
