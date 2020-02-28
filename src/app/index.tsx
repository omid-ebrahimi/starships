import React from 'react';
import styles from './app.module.css';
import CardShip from './CardShip';
import { useStarShips } from './controller';

function App(): JSX.Element {
    const { data } = useStarShips();
    return (
        <div className={styles.screen}>
            <main style={{ width: '60%' }}>
                {data && data.results.map(ship => <CardShip key={ship['name']} {...ship} />)}
            </main>
        </div>
    );
}

export default App;
