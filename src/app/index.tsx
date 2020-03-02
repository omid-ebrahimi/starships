import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { ButtonWarning, ButtonSuccess } from '../components/Button';
import Ships from './Ships';
import Splash from './Splash';
import styles from './app.module.css';
import { useStarShips } from './controller';

function App(): JSX.Element {
    const { data, loading, loadData } = useStarShips();
    if (data) {
        const { results, next, previous } = data;
        return (
            <Grid>
                <Row>
                    <Cell desktopColumns={3}> </Cell>
                    <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                        <Ships ships={results} loading={loading} />
                    </Cell>
                    <Cell desktopColumns={3}> </Cell>
                </Row>
                <Row className={styles.footer}>
                    <ButtonWarning onClick={(): void => loadData(previous)} disabled={loading || !previous}>
                        Previous
                    </ButtonWarning>
                    <ButtonSuccess onClick={(): void => loadData(next)} disabled={loading || !next}>
                        Next
                    </ButtonSuccess>
                </Row>
            </Grid>
        );
    }
    return <Splash />;
}

export default App;
