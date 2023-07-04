import Link from 'next/link'
import { BiHomeCircle, BiGame, BiHash, BiPlus } from "react-icons/bi";
import CreatePost from './CreatePost';

export function FeedLink() {
    return (
        <Link href="#" passHref className={`
            flex flex-row items-center justify-center gap-1
            p-2 rounded-full group-hover/navbtns:rounded-xl
            hover:bg-neutral-700/50 transition-all
            text-red-400
            
        `}>
            <BiHomeCircle className='h-5 w-5'/>
            <span className={`
                text-sm font-semibold
                invisible group-hover/navbtns:visible
                transition-all
            `}>Início</span>
        </Link>
    )
}

export function GameLink() {
    return (
        <Link href="#" passHref className={`
            flex flex-row items-center justify-center gap-1
            p-2 rounded-full group-hover/navbtns:rounded-xl
            hover:bg-neutral-700/50 transition-all
            
        `}>
            <BiGame className='h-5 w-5'/>
            <span className={`
                text-sm font-semibold
                invisible group-hover/navbtns:visible
                transition-all
            `}>Jogos</span>
        </Link>
    )
}

export function AllLink() {
    return (
        <Link href="#" passHref className={`
            flex flex-row items-center justify-center gap-1
            p-2 rounded-full group-hover/navbtns:rounded-xl
            hover:bg-neutral-700/50 transition-all
        `}>
            <BiHash className='h-5 w-5'/>
            <span className={`
                text-sm font-semibold
                invisible group-hover/navbtns:visible
                transition-all
            `}>Explorar</span>
        </Link>
    )
}

export function CreatePostLink() {
    return (
        <Link href="#" passHref className={`
            flex flex-row items-start justify-start gap-1
            p-2 rounded-full w-28  group-hover/navbtns:rounded-xl
            hover:bg-neutral-700/50 transition-all
        `}>
            <BiPlus className='h-5 w-5'/>
            <span className={`
                text-sm font-semibold
                invisible group-hover/navbtns:visible
                transition-all
            `}>Criar post</span>
        </Link>
    )
}

export default function NavControls() {
    return (
        <div className={`
        flex flex-col items-center justify-center
        w-16 h-full z-30
        fixed top-0 left-4
        `}>
            <div className={`
                flex flex-col items-start justify-center gap-4
                bg-neutral-800/80 rounded-[calc(56px/2)] px-2 py-3
                h-fit w-[56px] hover:w-36 hover:rounded-2xl transition-all
                fixed bottom-auto left-4 overflow-hidden
                backdrop-blur-md border border-neutral-700
                group/navbtns
            `}>
                <FeedLink/>
                <GameLink/>
                <AllLink/>  
                <CreatePostLink/>

            </div>
        </div>
    )
}