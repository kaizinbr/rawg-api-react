export default function GameBackground({ game }: any) {
    return (
        <div className={`
            flex flex-col
            w-full h-3/4
            absolute top-0 left-0 -z-20
            bg-center bg-cover bg-no-repeat
        `}
        style={{backgroundImage: `url(${game.background_image_additional})`}}
        >
        </div>
    )
}