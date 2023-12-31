"use client";
import { useRouter } from 'next/navigation'
import { BsArrowLeft } from "react-icons/bs"
import { motion } from "framer-motion";

export default function CheckoutBtn() {

    const router = useRouter()

    return (
        <button
            onClick={() => router.push("/cart/checkout")}
            className={`
                w-full h-12 bg-neutral-500 text-white rounded-lg
                hover:bg-blue-600 transition duration-200
            `}
        >
            Finalizar compra
        </button>
    )
}