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
    title: string;
    content: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export interface Head{
    Navbar: string    
    to: string
}