/* eslint-disable @next/next/no-img-element */
import { getPlatformIcon } from "@/services/icons";

// ORDEM
// DESCRIÇÃO
// PLATAFORMAS
// OPINIOES / RATING USERS
// METASCORE
// SCREENSHOTS
// REQUISITOS
// ESPECIFICACOES (DESENVOLVEDOR, EDITORA, DATA DE LANÇAMENTO, GENERO, TAGS)
// ESTATISTICAS DE NERDS
// VIDEOS
// DLCs
// COMUNIDADE

const Platform = ({ platform }: any) => {
    const {
        platform: { name, slug },
    } = platform;
    const icon = getPlatformIcon(slug);
    // console.log(`nome ${name}, // slug ${slug}`,icon);
    return (
        <div className="flex flex-row justify-center items-center gap-2 bg-neutral-700 rounded-full py-2 px-4">
            {icon}
            <p>{name}</p>
        </div>
    );
};

export default function GamePlatforms({ game }: any) {
    // console.log(game.id)
    return (
        <div className="flex flex-col justify-start items-start col-span-12 bg-neutral-800 gap-4 rounded-xl pt-4 pb-7 px-6">
            <div>
                <h3 className="text-2xl font-bold">Plataformas</h3>
            </div>
            <div className="flex flex-row flex-wrap gap-3">
                {game.platforms.map((platform: any, index: number) => {
                    return <Platform key={index} platform={platform} />;
                })}
            </div>
        </div>
    );
}
