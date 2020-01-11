import React from 'react';
import styles from './Screen.module.scss';
import Backtracks from './Backtracks/Backtracks.js';
import Melodies from './Melodies/Melodies.js';
import Chords from './Chords/Chords.js';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosedOption: 'backtracks',
    }
  }

  handleOption(e) {
    this.setState({
      choosedOption: e.target.name,
    })
  }



  render() {
    return(
      <div className={styles.screen}>
        <ul className={styles.screenMenu}>
          <li className={styles.screenMenuItem}><button name="backtracks" onClick={this.handleOption.bind(this)} className={[styles.screenMenuBtn, styles.screenMenuFirstBtn].join(' ')}>backtracks</button></li>
          <li className={styles.screenMenuItem}><button name="melodies" onClick={this.handleOption.bind(this)} className={styles.screenMenuBtn}>melodies</button></li>
          <li className={styles.screenMenuItem}><button name="chords" onClick={this.handleOption.bind(this)} className={[styles.screenMenuBtn, styles.screenMenuLastBtn].join(' ')}>chords</button></li>
        </ul>
        <div className={styles.resoultScreen}>
          {this.state.choosedOption === "backtracks" && <Backtracks />}
          {this.state.choosedOption === "melodies" && <Melodies />}
          {this.state.choosedOption === "chords" && <Chords />}
        </div>
      </div>
    )
  }
}

export default Screen;