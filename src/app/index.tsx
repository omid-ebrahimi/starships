import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Ships from './Ships';
import Splash from './Splash';
import styles from './app.module.css';
import { useStarShips } from './controller';

function App(): JSX.Element {
    const { data, loading, loadData } = useStarShips();
    if (data) {
        return (
            <Grid>
                <Row>
                    <Cell desktopColumns={3}> </Cell>
                    <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                        <Ships ships={data?.results} loading={loading} />
                    </Cell>
                    <Cell desktopColumns={3}> </Cell>
                </Row>
                <Row className={styles.footer}>
                    <a onClick={(): void => loadData(data.previous)}>Previous</a>
                    <a onClick={(): void => loadData(data.next)}>Next</a>
                </Row>
            </Grid>
        );
    }
    return <Splash />;
}

export default App;
