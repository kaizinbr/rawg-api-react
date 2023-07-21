import GameApp from "@/components/index/gamePage/GamePageIndex";
import data from "@/data/gameData.json";

export async function generateMetadata({
    params,
}: {
    params: { games: string[] };
}) {
    return {
        title: data.name,
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
            <GameApp id={id} />
        </div>
    );
}
