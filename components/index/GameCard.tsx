// "use client";
// import React, { useState, useEffect } from "react";
// import api from '../../services/api';

// interface CardProps {
//     name: any;
//     id: any;
//     background_image: any;
//     dominant_color: any;
// }

// export default function GameCard({
//     name,
//     id,
//     background_image,
//     dominant_color
// }: CardProps) {

//     const [data, setData] = useState<any[]>([]);

//     // useEffect(() => {
//     //     api.get('/games')
//     //         .then((response) => {
//     //             console.log(response.data.results)
//     //             setData(response.data.results);
//     //         });
//     // }, []);

//     return (
//         // <>
//         //     <div>
//         //         <p>{id}, {name}</p>
//         //     </div>

//         // </>
//         <div className={`
//              w-full mb-4 rounded-md h-96
//              bg-cover bg-center
//         `}
//             style={{
//                 // backgroundImage: `url(${bg})`,
//                 backgroundImage: `url(${background_image})`,
//                 backgroundColor: `${dominant_color}`
//             }}

//         >
//             <p>{id}, {name}</p>
//         </div>
//     )
// }

import React from 'react';
import Image from 'next/image';

interface CardProps {
        game: any;
    }
    

const GameCard = ({ game }: CardProps ) => {
    console.log(game)
    return (
        <div className={`
            game-card
            w-full mb-4 rounded-md
        `}>
            <Image src={game.background_image} alt={game.name} height={189} width={315}
            style={{ width: '100%', height: 'auto' }}/>
            <h2>{game.name}</h2>
            <p>{game.release_date}</p>
        </div>
    );
};

export default GameCard;
