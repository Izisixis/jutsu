import React from 'react';
import styles from './App.module.scss';
import { Button } from './shared/ui/Button/Button.tsx';
import { Header } from './widgets/Header/Header.tsx';
import { Profile } from './features/Profile/Profile.tsx';
import { HeadSearch } from './features/HeadSearch/HeadSearch.tsx';
import { Social } from './features/Social/Social.tsx';
import { BodyHead } from './widgets/BodyHead/BodyHead.tsx';
import { Navigation } from './widgets/Navigation/Navigation.tsx';
import { Chat } from './widgets/Chat/Chat.tsx';
import { VideoPlayer } from './features/VideoPlaer/VideoPlayer.tsx';
import { Achive } from './features/Achive/Achive.tsx';
import { SeriesBtn } from './widgets/SeriesBtn/SeriesBtn.tsx';
import { Evidence } from './widgets/Evidence/Evidence.tsx';
import { Random } from './widgets/Random/Random.tsx';
import { Seen } from './widgets/Seen/Seen.tsx';

function App() {
  const navBtn = [
    'Аниме',
    'Форум',
    'Нарутопедия',
    'Смотреть Наруто',
    'Аниме',
    'Аниме',
    'Аниме',
    'Аниме',
    'Аниме',
    'Аниме',
    'Аниме',
    'Аниме',
    'Аниме',
  ];

  return (
    <div className="App">
      <Header />
      <div className={styles.bodyMain}>
        <div className={styles.bodyHead}>
          <Profile />
          <HeadSearch />
          <Social />
        </div>
        <div className={styles.container}>
          <div className={styles.video}>
            <BodyHead />
            <div className={styles.content}>
              <Achive />
              <VideoPlayer />
              <SeriesBtn />
              <Seen />
            </div>
          </div>

          <div className={styles.otherItems}>
            <Navigation />
            <Chat />
            <Random />
            <Evidence />
          </div>
          <div className={styles.footer}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
