import React from 'react';
import styles from './Backtracks.module.scss';
import aBlues from '../../../assets/sounds/backtracks/aBlues.ogg';
import cmajor from '../../../assets/sounds/backtracks/c_major_soft_ballad.ogg';
import gmajor from '../../../assets/sounds/backtracks/g_major_country_rock.mp3'

function Backtracks() {
  const backtracks = [{
    name: 'a blues',
    path: aBlues,
  },
  {
    name: 'c major soft ballad',
    path: cmajor,
  },
  {
    name: 'g major country rock',
    path: gmajor,
  }];

  return (
    <ul className={styles.backtracksList}>
      {backtracks.map((value, index) => {
        return (
        <li key={index} className={styles.backtracksListElement}>
          <span className={styles.songTitle}>{value.name}</span>
          <audio className={styles.player} controls="controls" src={value.path} ></audio>
        </li>
        )
      })}
    </ul>
  )
}

export default Backtracks;