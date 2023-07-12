

export async function generateMetadata({ params }: { params: { games: string[] } }) {
    return {
        title: "Game",
        description: "A game page",
        slug: params.games[1]
    }
}

export default function Game({ params }: { params: { games: string[] } }) {



    return (
        <div className="">
            <p>Esse game tem o slug: {params.games[1]} e id: {params.games[0]}</p>
        </div>
    )
}