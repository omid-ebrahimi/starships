import React, { ButtonHTMLAttributes } from 'react';
import styles from './buttonSuccess.module.css';

function ButtonSuccess({ className, ...otherProps }: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
    return <button {...otherProps} className={`${styles.button} ${className}`} />;
}

export default ButtonSuccess;
