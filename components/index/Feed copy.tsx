import { memo } from 'react';
import GameCard from './GameCard';
import { Game } from '../../types/Game.types';
import GetGames from '../../services/rawg/getGames';

interface Props {
    cards: Game[],
    //   cartItems: Game[];
    //   addToCart: (game: Game) => void;
    columnsCount: number;
}

function Feed({ cards, columnsCount }: Props) {
    const gamesPerColumn = Math.ceil(cards.length / columnsCount);
    
    const columns = Array(columnsCount).fill(null).map((_, index) => {
        const gamesToDisplay = [];
        for (let i = 0; i < gamesPerColumn; i++) {
            const gameIndex = i * columnsCount + index;
            if (gameIndex < cards.length) {
                gamesToDisplay.push(cards[gameIndex]);
            }
        }
        return gamesToDisplay;
    });

    return (
        <div className={`Grid min-h-screen w-full
         grid grid-rows-${columnsCount} gap-4 grid-flow-col
         px-24
        `}>
            <>
                <GetGames />
                {columns.map((column, index) => (
                    <div key={`column-${index}`} className="Column">
                        {column.map(async (game) => (
                            <GameCard
                                key={game.id} 
                                id={game.id}
                                bg={game.bg}
                                h={game.h}
                                name={game.name}
                            />
                            // <div key={game.id}>{game.h}</div>
                        ))}
                    </div>
                ))}
            </>
        </div>
    );
}

export default Feed;
