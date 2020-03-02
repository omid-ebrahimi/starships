import React from 'react';
import styles from './buttonWarning.module.css';

function ButtonWarning(props): JSX.Element {
    return <button {...props} className={styles.button} />;
}

export default ButtonWarning;
