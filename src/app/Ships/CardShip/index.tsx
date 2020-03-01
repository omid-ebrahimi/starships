/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { StarShip } from '../../../api/types';
import { capitalizeFirstLetter } from '../../../utils/string';
import ProgressBar from './ProgressBar';
import styles from './cardShip.module.css';

function CardShip({ name, crew, passengers, hyperdrive_rating }: StarShip): JSX.Element {
    return (
        <section className={styles.container}>
            <h3>{capitalizeFirstLetter(name)}</h3>
            <div className={styles.content}>
                <div className={styles.contentSection}>
                    <span>Crew: {parseInt(crew) ? crew : 'None'}</span>
                    <p>Passengers: {parseInt(passengers) ? passengers : 'None'}</p>
                </div>
                <div className={styles.contentSection}>
                    <span>Hyperdrive Class</span>
                    <ProgressBar value={parseFloat(hyperdrive_rating)} />
                </div>
            </div>
        </section>
    );
}

export default CardShip;
