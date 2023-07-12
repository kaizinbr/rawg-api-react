import {
    PiHeartBold,
    PiHeartFill,
    PiHeartBreakBold,
    PiShareFatBold,
    PiDotsThreeOutlineVerticalFill,
    PiStarFill,
    PiPlusCircleBold
} from 'react-icons/pi'

export function HeartBtn({ isHovered, isLiked, handleLike, handleUnlike }: any) {
    return (
        <div className={`btn-box 
            p-2 rounded-full transition duration-300 
            cursor-pointer 
            hover:bg-neutral-700 hover:text-neutral-100
        `}>
            <PiHeartBold
            className={`
                text-neutral-300 text-xl
                cursor-pointer
            `} />
        </div>
    )
}

export function PostBtn({ isHovered }: any) {
    return (
        <div className={`btn-box
            p-2 rounded-full transition duration-300
            cursor-pointer
            hover:bg-neutral-700 hover:text-neutral-100
        `}>
            <PiPlusCircleBold
            className={`
                text-neutral-300 text-xl
                cursor-pointer
            `} />
        </div>
    )
}

export function ShareBtn({ isHovered }: any) {
    return (
        <div className={`btn-box 
            p-2 rounded-full transition duration-300 
            cursor-pointer 
            hover:bg-neutral-700 hover:text-neutral-100
        `}>
            <PiShareFatBold
            className={`
                text-neutral-300 text-xl
                cursor-pointer
            `} />
        </div>
    )
}

export function MoreBtn({ isHovered }: any) {
    return (
        <div className={`btn-box 
            p-2 rounded-full transition duration-300 
            cursor-pointer 
            hover:bg-neutral-700 hover:text-neutral-100
        `}>
            <PiDotsThreeOutlineVerticalFill
            className={`
                text-neutral-300 text-xl
                cursor-pointer
            `} />
        </div>
    )
}