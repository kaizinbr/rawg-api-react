import api from '../api';

interface Game {
    id: number;
    // Outras propriedades relevantes do jogo
}

const getGameSeries = async (id: number) => {
    try {
        const response = await api.get(`games/${id}/game-series`);

        return response.data.results;
    } catch (error) {
        console.error('Error retrieving games:', error);
        
        return {} as Game[];
    }
};

export default getGameSeries;
