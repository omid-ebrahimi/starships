import React from 'react';
import styles from './app.module.css';
import { useStarShips } from './controller';

function App(): JSX.Element {
    const { data } = useStarShips();
    return (
        <div className={styles.screen}>{data && data.results.map(ship => <p key={ship['name']}>{ship.name}</p>)}</div>
    );
}

export default App;
