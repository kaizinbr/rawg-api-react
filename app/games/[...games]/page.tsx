import GameApp from "@/components/index/gamePage/GamePageIndex";
import data from "@/data/gameData.json";
import getGames  from "@/services/rawg/getGameData";

export async function generateMetadata({
    params,
}: {
    params: { games: string[] };
}) {

    const id = +params.games[0];
    const gameData = await getGames({ id });
    // console.log(gameData);

    return {
        title: `${gameData.name} | GameHub`,
        description: "A game page",
        slug: params.games[1],
    };
}

export default function Game({ params }: { params: { games: string[] } }) {
    const id: number = +params.games[0];
    // console.log(id);

    return (
        <div className="">
            {/* <p>
                Esse game tem o slug: {params.games[1]} e id: {params.games[0]}
            </p> */}
            {/* <div className="w-full text-center"><span className="text-sm ">Aqui eu nao arrumei ainda</span></div> */}
            <GameApp id={id} />
        </div>
    );
}
