import api from '../api';

import { GameInfos } from "@/types/Game.types";
const key = process.env.NEXT_PUBLIC_API_KEY;

interface Game {
    id: number;
    // Outras propriedades relevantes do jogo
}

const getGames = async ({id}: Game): Promise<GameInfos> => {
    console.log(id)
    try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${key}`);
        // console.log(response)
        return response.json();
    } catch (error) {
        console.error('Error retrieving games:', error);
        
        return {} as GameInfos;
    }
};

export async function getMoreGames() {}

export default getGames;
