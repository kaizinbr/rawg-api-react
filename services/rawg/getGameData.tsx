import api from '../api';

const key = process.env.NEXT_PUBLIC_API_KEY;

interface Game {
    id: number;
    // Outras propriedades relevantes do jogo
}

const getGames = async ({id}: Game): Promise<Game[]> => {
    console.log(id)
    try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${key}`);

        return response.json();
    } catch (error) {
        console.error('Error retrieving games:', error);
        
        return [];
    }
};

export default getGames;
