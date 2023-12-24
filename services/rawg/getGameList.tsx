import api from "../api";

const key = process.env.NEXT_PUBLIC_API_KEY;
import { baseURL } from "../api";

interface Game {
    count: number,
    prev: string,
    next: string,
    results: [];
    // Outras propriedades relevantes do jogo
}

const getGames = async (): Promise<Game> => {
    const res = await fetch(`${baseURL}games?key=${key}&page_size=35`, { cache: 'no-store' });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

const getMoreGames = async (url: string): Promise<Game> => {
    const res = await fetch(url, { cache: 'no-store' });
    
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

export {getGames, getMoreGames};
