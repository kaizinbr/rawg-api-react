/* eslint-disable @next/next/no-img-element */
export default function GameHeader ({ game }: any) {
    // console.log(game.id)
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">{game.name}</h1>
            <h2>{game.rating}</h2>
            <h2>{game.playtime}</h2>
            
            <img src={game.background_image} alt="" className="w-96 h-96 rounded-lg" />
            <ul>
                {game.genres.map((genre: any) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
            <ul>
                {game.tags.slice(0, 3).map((tag: any) => (
                    <li key={tag.id}>{tag.name}</li>
                ))}
            </ul>
        </div>
    )
}