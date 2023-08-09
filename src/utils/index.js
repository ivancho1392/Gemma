const getTotalPrice = (products) => {
    const totalPrice = products.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);

    return totalPrice;
};

const getTotalPriceMyOrder = (products) => {
    const productsWithTotalPrice = products.filter(product => product.hasOwnProperty('totalPrice'));

    const totalPrice = productsWithTotalPrice.reduce((accumulator, product) => {
        return accumulator + product.totalPrice;
    }, 0);

    return totalPrice;
};

export { getTotalPrice, getTotalPriceMyOrder}