import React from 'react';
import { Logo } from '../../assets/img';
import styles from './splash.module.css';

function Splash(): JSX.Element {
    return (
        <div className={styles.screen}>
            <img src={Logo} width="30%" height="30%" className={styles.logo} alt="logo" />
            <h3>Welcome to Star Ships</h3>
        </div>
    );
}

export default Splash;
