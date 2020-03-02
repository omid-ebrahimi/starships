/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react';
import Transport from '../api/Transport';
import { GetStarShipsResponse } from '../api/types';
import { getStarShipsRequest } from '../api/requsets';

export function useStarShips() {
    const [data, setData] = useState<GetStarShipsResponse>();
    const [loading, setLoading] = useState(false);

    function loadData(path?: string | null): void {
        if (path) {
            setLoading(true);
            Transport.get<GetStarShipsResponse>(path)
                .then(setData)
                .catch(console.error)
                .finally(() => setLoading(false));
        }
    }

    useEffect(() => loadData(getStarShipsRequest()), []);

    return { data, loading, loadData };
}
