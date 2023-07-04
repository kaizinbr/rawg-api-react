import { BiPlus } from "react-icons/bi";

export default function CreatePost() {

    return (
        <div className={`
            flex flex-row items-center justify-center
            gap-2 cursor-pointer bg-neutral-700
            
            p-2 rounded-md hover:bg-neutral-600 transition-all
        `}>
            <span>
                <BiPlus />
            </span>
            <p className={`
                text-sm font-semibold
            `}>Create Post</p>
        </div>
    )

}