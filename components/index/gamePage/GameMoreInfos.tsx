import { getPlatformIcon } from "@/services/icons";
import Link from "next/link";
import { BiArrowToRight } from "react-icons/bi";
// ESPECIFICACOES (DESENVOLVEDOR, REQUISITOS, EDITORA, DATA DE LANÇAMENTO,
// GENERO, TAGS)

const MoreTags = ({ tags }: any) => {
    return (
        <div className="flex flex-row flex-wrap gap-3">
            {tags.map((tag: any, index: number) => {
                return (
                    <div key={index}>
                        <Link href={`/tag/${tag.name}`}>{tag.name}</Link>
                    </div>
                );
            })}
        </div>
    );
};

const MoreTagsBtn = ({ tags }: any) => {
    return (
        <div className="flex flex-row flex-wrap gap-3 text-red-400 font-light">
            <button onClick={() => console.log("oi")}>Veja mais...</button>
        </div>
    );
};

export default function GameSpecifications({ game }: any) {
    const update = new Date(game.updated);
    const localDateUpdate = update.toLocaleDateString("pt-BR");

    const date = new Date(game.released);
    const localDate = date.toLocaleDateString("pt-BR");

    return (
        <div className="grid grid-cols-8 gap-x-4 gap-y-4 col-span-6 md:col-span-8 bg-neutral-800 rounded-xl pt-4 pb-7 px-6 order-7">
            <div className="col-span-8">
                <h3 className="text-2xl font-bold">Especificações</h3>
            </div>
            <div className="col-span-4">
                <h4 className="text-neutral-300 font-normal">Website:</h4>
                <Link className="font-semibold flex flex-row items-center gap-1 flex-wrap text-wrap" href={game.website}>
                    {game.website.replace("https://www.", "").replace("http://www.", "").replace("https://", "").replace("http://", "")} 
                    <BiArrowToRight className="text-xl" />
                </Link>
            </div>
            <div className="col-span-4">
                <h4 className="text-neutral-300 font-normal">Deselvolvidor por:</h4>
                {game.developers.map((developer: any, index: number) => {
                    return (
                        <span key={index} className="font-semibold">
                            {(index ? ", " : "") + developer.name}
                        </span>
                    );
                })}
            </div>
            <div className="col-span-4">
                <h4 className="text-neutral-300 font-normal">Publicado por:</h4>
                <div className="flex flex-row">
                    {game.publishers.map((publisher: any, index: number) => {
                        return (
                            <span key={index} className="font-semibold">
                                {/* thanks to https://stackoverflow.com/questions/47881767/how-to-add-a-comma-in-array-map-after-every-element-except-last-element-in-react/47882041#47882041?newreg=38298a099e1c4e0a93edbde4e5d7f425 😊 */}
                                {(index ? ", " : "") + publisher.name}
                            </span>
                        );
                    })}
                </div>
            </div>
            <div className="col-span-4">
                <h4 className="text-neutral-300 font-normal">Data de lançamento:</h4>
                <p className="font-semibold">{localDate}</p>
            </div>
            <div className="col-span-4">
                <h4 className="text-neutral-300 font-normal">Atualizado:</h4>
                <p className="font-semibold">{localDateUpdate}</p>
            </div>            
            <div className="col-span-4">
                <h4 className="text-neutral-300 font-normal">Playtime:</h4>
                <p className="font-semibold">{game.playtime ? game.playtime : 0} horas</p>
            </div>
            <div className="col-span-4">
                <h4 className="text-neutral-300 font-normal">Classificação indicativa:</h4>
                <p className="font-semibold">{game.esrb_rating ? game.esrb_rating.name : '...'}</p>
            </div>
            <div className="col-span-4">
                <h4 className="text-neutral-300 font-normal">Série:</h4>
                <p className="font-semibold">{game.game_series_count ? game.game_series_count : '...'} jogos</p>
            </div>
            <div className="col-span-4">
                <h4 className="text-neutral-300 font-normal">Gêneros:</h4>
                <div className="flex flex-row flex-wrap gap-x-1">
                    {game.genres.map((genre: any, index: number) => {
                        return (
                            <div key={index}>
                                <Link className="font-semibold" href={`/genre/${genre.name}`}>
                                    {genre.name}
                                </Link>
                                {index !== 2 ? ", " : ""}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="col-span-4">
                <h4 className="text-neutral-300 font-normal">Tags:</h4>
                <div className="flex flex-row flex-wrap gap-x-1">
                    {game.tags.slice(0, 3).map((tag: any, index: number) => {
                        return (
                            <div key={index}>
                                <Link className="font-semibold" href={`/tag/${tag.name}`}>
                                    {tag.name}
                                </Link>
                                {index !== 2 ? ", " : ""}
                                {game.tags.length > 3 && index === 2 ? (
                                    <MoreTagsBtn className="font-semibold" tags={game.tags} />
                                ) : (
                                    ""
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

