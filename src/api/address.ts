export const API_ADDRESS = process.env.REACT_APP_API_ADDRESS;

export function getEndPointPath(path: string): string {
    return API_ADDRESS + path;
}
