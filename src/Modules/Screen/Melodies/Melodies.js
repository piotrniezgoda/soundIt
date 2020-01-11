import React from 'react';
import styles from './Melodies.module.scss';


function Melodies() {
  const melodiesSet = [{
    title: 'I love you (barney song)',
    sounds: 'GEG GGEG AGFEDEF EFGCCCCCDEFG GDDFEDC'
  },
  {
    title: 'Jingle Bells',
    sounds: 'EEE EEE EGCDE FFFFFEEEE EDDEDG'
  }]

  return (
    <div className={styles.listContainer}>
      <ul className={styles.melodiesList}>
        {melodiesSet.map((melodie, index) => {
          return (
          <li key={index} className={styles.melodiesListElement}>
            <p className={styles.melodie}>{melodie.title}: {melodie.sounds}</p>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Melodies;