/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react';
import Transport from '../api/Transport';
import { GetStarShipsResponse } from '../api/types';
import { getStarShipsRequest } from '../api/requsets';

export function useStarShips() {
    const [data, setData] = useState<GetStarShipsResponse>();

    function loadData(path?: string | null): void {
        if (path) Transport.get<GetStarShipsResponse>(path).then(setData);
    }

    useEffect(() => loadData(getStarShipsRequest()), []);

    return { data, loadData };
}
