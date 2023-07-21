/* eslint-disable @next/next/no-img-element */

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

export default function GameDesc({ game }: any) {
    const pArr = game.description_raw.split("\n");
    const pArrCopy = pArr.filter((p: any) => p !== "");

    // console.log(pArrCopy);
    return (
        <div className="flex flex-col justify-center items-start col-span-8 pr-3">
            <div>
                <h3 className="text-2xl text-left font-bold">Descrição</h3>
            </div>
            <div>
                {pArrCopy.map((p: any, index: string) => (
                    <p
                        key={index}
                        className="text-lg text-neutral-200 font-light my-4 text-justify"
                    >
                        {p}
                    </p>
                ))}
            </div>
        </div>
    );
}