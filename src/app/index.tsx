import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import CardShip from './CardShip';
import { useStarShips } from './controller';

function App(): JSX.Element {
    const { data } = useStarShips();
    return (
        <Grid>
            <Row>
                <Cell desktopColumns={3}> </Cell>
                <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                    {data && data.results.map(ship => <CardShip key={ship['name']} {...ship} />)}
                </Cell>
                <Cell desktopColumns={3}> </Cell>
            </Row>
        </Grid>
    );
}

export default App;
