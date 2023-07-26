export  interface Mark {
    card: number;
    names: string
}

export  interface Valued {
    H: number;
    E: string
}

export interface Axios {
    baseURL: string;
    timeout: number;
    headers: {'X-Custom-Header': string, "Access-Control-Allow-Origin": string, }
}

export interface DataPart {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}