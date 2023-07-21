import Link from "next/link";

export default function GameMoreLinks({ game }: any) {
    // const [gameSeries, setGameSeries] = useState<any[]>([]);
    // const [gameStores, setGameStores] = useState<any[]>([]);
    // const [gameCreators, setGameCreators] = useState<any[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const gameSeriesData = await getGameSeries(game.id);
    //         setGameSeries(gameSeriesData);

    //         const gameStoresData = await getGameStores(game.id);
    //         setGameStores(gameStoresData);

    //         const gameCreatorsData = await getGameCreators(game.id);
    //         setGameCreators(gameCreatorsData);
    //     };
    //     fetchData();
    // }, []);

    const isASeries = game.game_series_count > 1;
    return (
        <div className="flex flex-col justify-start items-start col-span-4 gap-6 bg-neutral-800 rounded-xl pt-4 pb-7 px-6">
            <div>
                <h3 className="text-2xl text-left font-bold">Links</h3>
            </div>
            <div className="w-full">
                <Link 
                    href={game.reddit_url} 
                    className={`
                    w-full py-2 px-4 rounded-xl bg-neutral-700
                    hover:bg-neutral-500 transition duration-300
                    text-neutral-200 hover:text-neutral-950 text-center
                    text-xl font-semibold
                    flex flex-row justify-center items-center gap-1
                `}
                
                >Lojas</Link>
                {/* <GameStores gameStores={gameStores} /> */}
            </div>
            {isASeries ? <div className="w-full">
                <Link 
                    href={game.reddit_url} 
                    className={`
                    w-full py-2 px-4 rounded-xl bg-neutral-700
                    hover:bg-neutral-500 transition duration-300
                    text-neutral-200 hover:text-neutral-950 text-center
                    text-xl font-semibold
                    flex flex-row justify-center items-center gap-1
                `}
                
                >Série</Link>
                {/* <GameSeries gameSeries={gameSeries} /> */}
            </div> : ""}
            <div className="w-full">
                <Link 
                    href={game.reddit_url} 
                    className={`
                    w-full py-2 px-4 rounded-xl bg-neutral-700
                    hover:bg-neutral-500 transition duration-300
                    text-neutral-200 hover:text-neutral-950 text-center
                    text-xl font-semibold
                    flex flex-row justify-center items-center gap-1
                `}
                
                >Criadores</Link>
                {/* <GameCreators gameCreators={gameCreators} /> */}
            </div>
            <div className="w-full">
                <Link 
                    href={game.reddit_url} 
                    className={`
                    w-full py-2 px-4 rounded-xl bg-neutral-700
                    hover:bg-neutral-500 transition duration-300
                    text-neutral-200 hover:text-neutral-950 text-center
                    text-xl font-semibold
                    flex flex-row justify-center items-center gap-1
                `}
                
                >Reddit</Link>
                {/* <GameCreators gameCreators={gameCreators} /> */}
            </div>
        </div>
    );
}