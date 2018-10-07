productData = {
    "title": "The Original Round Robin",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium massa vitae augue vehicula posuere. Ut gravida ante at maximus mollis. Ut vel eros dictum, auctor metus in, feugiat nisl. Mauris ac arcu risus. Sed commodo justo magna, at rutrum diam auctor eu!",
    "price": "$112.00",
    "rating": "5",
    "img": "1"
};

function loadProduct() {
    let product = new Product(productData);
    product.buildPage();
}