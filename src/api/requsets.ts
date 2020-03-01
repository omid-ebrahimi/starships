import { getEndPointPath } from './address';

export function getStarShipsRequest(): string {
    return getEndPointPath('starships');
}
