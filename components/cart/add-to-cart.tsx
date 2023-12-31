"use client";

import { useEffect, useReducer } from "react";

export function AddToCartBtn({ gameId, gameName, gameSlug }: { gameId: string, gameName: string, gameSlug: string }) {
    

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
                    w-full md:w-80 h-12 rounded-xl              
                    bg-neutral-300 text-neutral-900 font-bold text-lg
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
