import React from 'react';
import { Loading as LoadingImage } from '../../assets/img';
import styles from './loading.module.css';

function Loading(): JSX.Element {
    return (
        <div className={styles.container}>
            <img src={LoadingImage} alt="loading" />
        </div>
    );
}

export default Loading;
