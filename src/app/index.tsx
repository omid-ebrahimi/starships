import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Splash from './Splash';
import CardShip from './CardShip';
import styles from './app.module.css';
import { useStarShips } from './controller';

function App(): JSX.Element {
    const { data } = useStarShips();
    if (data) {
        return (
            <Grid>
                <Row>
                    <Cell desktopColumns={3}> </Cell>
                    <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                        {data && data.results.map(ship => <CardShip key={ship['name']} {...ship} />)}
                    </Cell>
                    <Cell desktopColumns={3}> </Cell>
                </Row>
                <Row className={styles.footer}>
                    <p>Previous</p>
                    <p>Next</p>
                </Row>
            </Grid>
        );
    }
    return <Splash />;
}

export default App;
