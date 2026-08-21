interface Item {
    id: number,
    name: string,
    price: number,
    quantity: number
};

function addItem(cart: Item[], product: Item): Item[] {

    for (let item of cart) {
        if(item.id !== product.id) continue;
        else {
            const perItemCost = item.price / item.quantity;
            item.quantity += 1;
            item.price = perItemCost * item.quantity;
            return cart;
        }
    }
    product.price = product.quantity * product.price;

    // item not in cart
    cart.push(product);
    return cart;
}

function updateQuantity(cart: Item[], id: number, quantity: number): Item[] {

    for (let item of cart) {
        if(item.id !== id) continue;
        else {
            const perItemCost = item.price / item.quantity;
            item.quantity += quantity;
            item.price += perItemCost * quantity;
        }
    }
    return cart;

}

function getSubtotal(cart: Item[]): number {
    return cart.reduce((previousItem ,currentItem) => currentItem.price + previousItem,0);
}

function removeItem(cart: Item[], id: number): Item[] {
    const updatedCart: Item[] = cart.filter(item => item.id !== id);
    return updatedCart;
}

function clearCart(cart: Item[]): Item[] {

    while (cart.length) cart.pop();
    return cart;
}


let cart: Item[] = [];


cart = addItem(cart, { id: 1, name: "Notebook", price: 3.5, quantity: 2 });
cart = addItem(cart, { id: 2, name: "Pen", price: 1, quantity: 5 });
console.log(cart);
cart = addItem(cart, { id: 1, name: "Notebook", price: 3.5, quantity: 1 }); // should merge into existing item
console.log(cart);
cart = updateQuantity(cart, 2, 10);
console.log(cart);
console.log(getSubtotal(cart));
cart = removeItem(cart, 1);
console.log(cart);
cart = clearCart(cart);
console.log(cart);