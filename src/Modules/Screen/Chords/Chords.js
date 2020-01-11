import React from 'react';
import styles from './Chords.module.scss';

function Chords() {
  const chordsSet = [{
    title: 'C major',
    sounds: 'C E G'
  },
  {
    title: 'D major',
    sounds: 'D F# A'
  },
  {
    title: 'E major',
    sounds: 'E G# B'
  },
  {
    title: 'A major',
    sounds: 'A C# E'
  },
  {
    title: 'G major',
    sounds: 'G B D'
  }]
  return(
    <div className={styles.listContainer}>
      <ul className={styles.chordsList}>
        {chordsSet.map((chord, index) => {
          return (
          <li key={index} className={styles.chordsListElement}>
            <p className={styles.chord}>{chord.title}: {chord.sounds}</p>
          </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Chords;