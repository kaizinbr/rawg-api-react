"use client";
import api from '../api';
import React, { useState, useEffect } from "react";
import GameCard from '../../components/index/GameCard';
import axios from 'axios';

interface Props {
    columnsCount: number;
}

const Games = ({columnsCount}: Props) => {   
    // REQUISIÇÃO COM AXIOS
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        api.get('/games')
        .then((response) => {
            console.log(response.data.results)
            setData(response.data.results);
        });
    }, []);

    // manipulação de colunas
    const gamesPerColumn = Math.ceil(data.length / columnsCount);
    const columns = Array(columnsCount).fill(null).map((_, index) => {
        const gamesToDisplay = [];
        for (let i = 0; i < gamesPerColumn; i++) {
            const gameIndex = i * columnsCount + index;
            if (gameIndex < data.length) {
                gamesToDisplay.push(data[gameIndex]);
            }
        }
        return gamesToDisplay;
    });
    console.log(columns)
    
    return (
            
            <div className={`
                Grid min-h-screen w-full
                grid grid-rows-${columnsCount} gap-4 grid-flow-col
                px-20
            `}>
                {/* {data.map((game) => {
                    const { id, name, background_image, dominant_color } = game;
                    return (
                        <GameCard key={id} id={id} name={name} background_image={background_image} dominant_color={dominant_color} />
                    )
                })} */}

                {columns.map((column, index) => (
                    <div key={`column-${index}`} className='Column'>
                        {column.map((game) => (
                            <GameCard
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                background_image={game.background_image}
                                dominant_color={game.dominant_color}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
}

// function setGameCards(games: any[]) {
//     const cards = games.map((game) => {
//         const { id, background_image, name, height } = game;
//         return {
//             id,
//             bg: background_image,
//             name,
//             h: height,
//         }
//     }
//     );
//     return cards;
// }

// export async function getStaticProps() {
//     const response = await api.get('/games');
//     const games = response.data.results;
//     const cards = setGameCards(games);
//     return {
//         props: {
//             cards,
//         },
//     };
// }

// export async function getData () {
//     const response = await axios.get("https://httpstat.us/200");
//     return response.data;
// }

export default Games;

// export default function Teste() {

//     return (
//         <main>
//             <div>
//                 <p>teste</p>
//             </div>
//         </main>
//     );
    
// }