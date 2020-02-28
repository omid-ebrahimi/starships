interface StarShip {
    name: string;
    crew: string;
    passengers: string;
    hyperdrive_rating: string;
}

export interface GetStarShipsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: StarShip[];
}
