products = [
    {
        title: "title",
        desc: "desc",
        price: "price",
        rating: "rating",
        img: "img"
    }
];

function loadPage() {
    console.log("it's alive!!!");

    products.forEach(item => {
        let product = new Product(item);
        console.log(product);
    })

}