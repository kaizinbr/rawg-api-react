import api from './api';

interface Game {
    id: number;
    // Outras propriedades relevantes do jogo
}

const getGames = async (): Promise<Game[]> => {
    try {
        const response = await api.get('games');

        return response.data.results;
    } catch (error) {
        console.error('Error retrieving games:', error);
        
        return [];
    }
};

export default getGames;
