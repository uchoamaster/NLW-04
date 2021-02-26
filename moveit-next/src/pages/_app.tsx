import React from 'react';
import { Countdown } from '../components/Countdown';
import { CountdownProvider } from '../contexts/CountdownContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
