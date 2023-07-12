"use client";
import { useRouter } from 'next/navigation'
import { BsArrowLeft } from "react-icons/bs"

export default function BackButton() {

    const router = useRouter()

    return (
        <button 
            className={`
                text-2xl text-white cursor-pointer hover:text-gray-400 transition-all duration-200 ease-in-out
                flex items-center justify-center
                py-2 px-3 rounded-xl bg-neutral-500/30 hover:bg-neutral-500/40
            `}
            type="button"
            onClick={() => router.back()}
        >
            <BsArrowLeft />
        </button>
    )
}