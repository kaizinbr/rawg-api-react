import api from '../api';

interface Game {
    id: number;
    // Outras propriedades relevantes do jogo
}

const getScreenshots = async ({id}: Game) => {
    try {
        const response = await api.get(`games/${id}/screenshots`);

        return response.data.results;
    } catch (error) {
        console.error('Error retrieving games:', error);
        
        return {} as Game[];
    }
};

export default getScreenshots;
