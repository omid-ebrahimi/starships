import React from 'react';
import styles from './buttonSuccess.module.css';

function ButtonSuccess(props): JSX.Element {
    return <button {...props} className={styles.button} />;
}

export default ButtonSuccess;
