import React from 'react';
import LogoBar from '../../Modules/LogoBar/LogoBar.js';
import Screen from '../../Modules/Screen/Screen.js';
import Keyboard from '../../Modules/Keyboard/Keyboard.js';
import styles from './Piano.module.scss'

function App() {
  return (
    <>
      <LogoBar />
      <main>
        <Screen />
        <Keyboard />
      </main>
      <div className={styles.AppBg}></div>
    </>
  );
}

export default App;
