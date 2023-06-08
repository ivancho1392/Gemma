export const getTotalPrice = (products) => {
    const totalPrice = products.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);

    return totalPrice;
};