import { IoSearch } from "react-icons/io5";

export default function SearchBarSm() {
    return (
        <div className={`
                flex flex-row items-center justify-center
            `}>
                <input type="search" name="search" id="search" autoComplete="off" className={`
                    h-8 w-64 px-4 py-2
                    bg-neutral-800/70 backdrop-blur-3xl rounded-md outline-none
                    border border-neutral-700 hover:border-neutral-500 transition-all 
                `}/>
                <button className={`
                    h-8 w-8 ml-2 transition-all
                `}>
                    <IoSearch className={`
                        h-6 w-6 text-neutral-100
                    `}/>
                </button>

            </div>
    )
}