import React, { Fragment } from 'react';
import Loading from '../../components/Loading';
import CardShip from './CardShip';
import { ShipsProps } from './types';

function Ships({ ships, loading }: ShipsProps): JSX.Element {
    return (
        <Fragment>
            {ships.map(ship => (
                <CardShip key={ship['name']} {...ship} />
            ))}
            {loading && <Loading />}
        </Fragment>
    );
}

export default Ships;
