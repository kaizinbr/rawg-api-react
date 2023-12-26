"use client";

import { useState, useEffect } from "react";
import CartCard from "./CartCard";
import fetchGameDetails from "@/services/fetchGameOnCart";

export default function CartPage() {
    const [cartItems, setCartItems] = useState<any>([]);

    useEffect(() => {
        const Lalalala =
            localStorage.getItem("cartItems") ?? ""
                ? JSON.parse(localStorage.getItem("cartItems") ?? "")
                : [];
        setCartItems(Lalalala);
    }, []);

    // const cartItems =
    //     localStorage.getItem("cartItems") ?? ""
    //         ? JSON.parse(localStorage.getItem("cartItems") ?? "")
    //         : [];
    // console.log(cartItems);

    return (
        <div
            className={`
            flex flex-col
            m-auto w-full
        `}
        >
            <h1 className="text-4xl mb-8">Seu carrinho</h1>
            <div
                className={`
                flex flex-row
            `}
            >
                <div
                    className={`
                        flex flex-col
                        grow gap-6
                    `}
                >
                    {cartItems.map((game: any, i: any) => {
                        return <CartCard key={i} gameId={game.id} />;
                    })}

                    {cartItems.length === 0 && (
                        <h1 className="text-3xl mb-8">No games in cart</h1>
                    )}
                </div>
                <div
                    className={`
                        w-72 ml-6 flex-none
                    `}
                >
                    <div
                        className={`
                    
                    `}
                    >
                        <div
                            className={`
                                mb-4
                            `}
                        >
                            <h3 className="text-3xl">Resumo de jogos</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div
                                className={`
                                    flex flex-row justify-between
                                `}
                            >
                                <h3 className="">Subtotal</h3>
                                <h3 className="">R$ {(cartItems.length * 69.99).toLocaleString('pt-BR')}</h3>
                            </div>
                            <div
                                className={`
                                    flex flex-row justify-between
                                `}
                            >
                                <h3 className="">Taxas</h3>
                                <h3 className="">R$ 304,86</h3>
                            </div>
                            <div
                                className={`
                                    flex flex-row justify-between
                                `}
                            >
                                <h3 className="">Descontos</h3>
                                <h3 className="">-</h3>
                            </div>
                            <div
                                className={`
                                    flex flex-row justify-between
                                    mt-2 border-t border-neutral-700 pt-4
                                `}
                            >
                                <h3 className="text-xl">Total</h3>
                                <h3 className="text-xl">R$ {(cartItems.length * 69.99 + 304.86).toLocaleString('pt-BR')}</h3>
                            </div>
                        </div>
                        <div
                            className={`
                                mt-4
                            `}
                        >
                            <button
                                className={`
                                    w-full h-12 bg-blue-500 text-white rounded-lg
                                    hover:bg-blue-600 transition duration-200
                                `}
                            >
                                Finalizar compra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
