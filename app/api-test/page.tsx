"use client";
import React, { useState, useEffect } from "react";
import getGames from "../../services/rawg/getGames";

const Teste = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // const getGames = async () => {
    //     setData(await Games());
    //     console.log(data);
    // }
        
    const loadGames = async (search = '') => {
        const response = await getGames();
        let  results = response;
        results = results.filter((game) => game.ratings_count > (search ? 50 : 10));
        return results;
    };

    // console.log(loadGames());
    return (
        <React.Fragment>
            <div>
                aaaaaaaa                
            </div>
        </React.Fragment>
    );
}

export default Teste;

// const Index = () => {   
//     const [data, setData] = useState<any[]>([]);

//     useEffect(() => {
//         axios.get("https://api.rawg.io/api/games?key=6b749e73010d4081b7a673763e7c93d6")
//         .then((response) => {
//             setData(response.data.results);
//         });
//     }, []);


//     return (
//         <div>
//             <ul>
//                 {data.map((item) => (
//                     <li key={item.id}>
//                         <h1>{item.name}</h1>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Index;

// export default function Teste() {

//     return (
//         <main>
//             <div>
//                 <p>teste</p>
//             </div>
//         </main>
//     );
    
// }