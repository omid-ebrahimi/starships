import React, { ButtonHTMLAttributes } from 'react';
import styles from './buttonWarning.module.css';

function ButtonWarning({ className, ...otherProps }: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
    return <button {...otherProps} className={`${styles.button} ${className}`} />;
}

export default ButtonWarning;
