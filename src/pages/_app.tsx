import React from 'react'

import { AppProps } from 'next/dist/next-server/lib/router/router'

import Header from '../components/Header'
import Player from '../components/Player'
import PlayerProvider from '../contexts/PlayerContext'
import styles from '../styles/app.module.scss'

import '../styles/global.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <PlayerProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerProvider>
  )
}

export default App
