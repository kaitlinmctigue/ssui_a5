class Product {
    constructor(title, desc, price, rating, img) {
        this.title = title
        this.desc = desc
        this.price = price
        this.rating = rating
        this.img = img
    }

    buildItem() {
        console.log("build");

    }
}