const removeFromCart = (gameId: string): void => {
    console.log(gameId)
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    console.log(cartItems);
    const updatedCartItems = cartItems.filter(
        (item: any) => item.id !== gameId
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

};

export default removeFromCart;