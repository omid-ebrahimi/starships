export default class Transport {
    public static async get<T>(path: string): Promise<T> {
        const response = await fetch(path);
        if (response.ok) return response.json();
        throw Error('Request failed with status ' + response.status);
    }
}
