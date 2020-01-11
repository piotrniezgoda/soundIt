import React from 'react';
import styles from './LogoBar.module.scss';

function LogoBar () {
  return(
    <header className={styles.header}>
      <h1 className={styles.logo}><a href="/" className={styles.logoLink}>Sound<span className={styles.logoTail}>IT</span></a></h1>
    </header>
  )
}

export default LogoBar;