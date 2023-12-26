"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { addGame } from "@/components/cart/actions";
import { create } from "./newActions";
import LoadingDots from "@/components/loading-dots";
import { ProductVariant } from "@/lib/shopify/types";
import { useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useReducer } from "react";

function SubmitButton({ gameId }: { gameId: string | undefined }) {
    const { pending } = useFormStatus();
    const buttonClasses =
        "relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white";
    const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

    // if (!availableForSale) {
    //     return (
    //         <button
    //             aria-disabled
    //             className={clsx(buttonClasses, disabledClasses)}
    //         >
    //             Out Of Stock
    //         </button>
    //     );
    // }

    // if (!selectedVariantId) {
    //     return (
    //         <button
    //             aria-label="Please select an option"
    //             aria-disabled
    //             className={clsx(buttonClasses, disabledClasses)}
    //         >
    //             <div className="absolute left-0 ml-4">
    //                 <PlusIcon className="h-5" />
    //             </div>
    //             Add To Cart
    //         </button>
    //     );
    // }

    return (
        <button
            onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                if (pending) e.preventDefault();
            }}
            aria-label="Add to cart"
            aria-disabled={pending}
            className={clsx(buttonClasses, {
                "hover:opacity-90": true,
                disabledClasses: pending,
            })}
        >
            <div className="absolute left-0 ml-4">
                {pending ? (
                    <LoadingDots className="mb-3 bg-white" />
                ) : (
                    <PlusIcon className="h-5" />
                )}
            </div>
            Add To Cart
        </button>
    );
}

export function AddToCartBtn({ gameId, gameName, gameSlug }: { gameId: string, gameName: string, gameSlug: string }) {
    const [message, formAction] = useFormState(create, null);
    const searchParams = useSearchParams();

    // const selectedVariantId = variant?.id || defaultVariantId;
    const actionWithVariant = formAction.bind(null, gameId);

    function getStoredCartItems() {
        if (typeof window !== "undefined") {
            const storedCartItems = localStorage.getItem("cartItems");
            if (storedCartItems !== null) {
                try {
                    const cartItems = JSON.parse(storedCartItems);
                    return cartItems;
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return [];
    }

    function cartReducer(state: any, action: any) {
        switch (action.type) {
            case "ADD_TO_CART":
                const itemInCart = state.cartItems.find(
                    (item: any) => item.id === action.payload.id
                );
                return {
                    ...state,
                    cartItems: itemInCart
                        ? state.cartItems.map((item: any) =>
                              item.id === action.payload.id
                                  ? { ...item, qty: item.qty + 1 }
                                  : item
                          )
                        : [...state.cartItems, { ...action.payload, qty: 1 }],
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(cartReducer, {
        cartItems: getStoredCartItems(),
    });

    function handleAddToCart(gameId: any, gameName: any, gameSlug: any) {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id: gameId, name: gameName, slug: gameSlug },
        });
    }

    useEffect(() => {
        if (state.cartItens !== null) {
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }, [state]);

    return (
        // <form action={actionWithVariant}>
            <button
                onClick={() => handleAddToCart(gameId, gameName, gameSlug)}
                className={`
                    addToCartBtn
                    flex flex-row justify-center items-center
                    w-4/5 h-9 rounded-lg                
                    bg-neutral-300 text-neutral-900
                    hover:bg-neutral-800 border border-transparent hover:border-neutral-500 hover:text-neutral-300
                    transition duration-300 z-20
                `}
            >
                Adicionar ao carrinho
            </button>
        // </form>
    );
}

export function AddToCartBtn2({ gameId, gameName, gameSlug }: { gameId: string, gameName: string, gameSlug: string }) {
    const [message, formAction] = useFormState(create, null);
    const searchParams = useSearchParams();

    // const selectedVariantId = variant?.id || defaultVariantId;
    const actionWithVariant = formAction.bind(null, gameId);

    function getStoredCartItems() {
        if (typeof window !== "undefined") {
            const storedCartItems = localStorage.getItem("cartItems");
            if (storedCartItems !== null) {
                try {
                    const cartItems = JSON.parse(storedCartItems);
                    return cartItems;
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return [];
    }

    function cartReducer(state: any, action: any) {
        switch (action.type) {
            case "ADD_TO_CART":
                const itemInCart = state.cartItems.find(
                    (item: any) => item.id === action.payload.id
                );
                return {
                    ...state,
                    cartItems: itemInCart
                        ? state.cartItems.map((item: any) =>
                              item.id === action.payload.id
                                  ? { ...item, qty: item.qty + 1 }
                                  : item
                          )
                        : [...state.cartItems, { ...action.payload, qty: 1 }],
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(cartReducer, {
        cartItems: getStoredCartItems(),
    });

    function handleAddToCart(gameId: any, gameName: any, gameSlug: any) {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id: gameId, name: gameName, slug: gameSlug },
        });
    }

    useEffect(() => {
        if (state.cartItens !== null) {
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }, [state]);

    return (
        // <form action={actionWithVariant}>
            <button
                onClick={() => handleAddToCart(gameId, gameName, gameSlug)}
                className={`
                    addToCartBtn
                    flex flex-row justify-center items-center
                    w-4/5 h-9 rounded-lg                
                    bg-neutral-300 text-neutral-900
                    hover:bg-neutral-800 border border-transparent hover:border-neutral-500 hover:text-neutral-300
                    transition duration-300 z-20
                `}
            >
                Adicionar ao carrinho
            </button>
        // </form>
    );
}
