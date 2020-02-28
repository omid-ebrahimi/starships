import React from 'react';
import { StarShip } from '../../api/types';
import styles from './cardShip.module.css';

function CardShip({ name }: StarShip): JSX.Element {
    return (
        <section className={styles.container}>
            <h3>{name}</h3>
        </section>
    );
}

export default CardShip;
