class Product {
    constructor(item) {
        this.title = item.title
        this.desc = item.desc
        this.price = item.price
        this.rating = item.rating
        this.img = item.img
    }

    buildThumbnail() {
        //star
        let product = document.createElement("a");
        product.href = "product.html";
        product.classList.add("product", "col-xs-12", "col-sm-6", "col-md-3");

        let image = document.createElement("div");
        image.classList.add("product__image");
        image.style.backgroundImage = ("url(\"images/products/" + this.img + ".jpg\")");
        product.appendChild(image);

        let title = document.createElement("div");
        title.classList.add("product__title");
        title.innerHTML = this.title;
        product.appendChild(title);

        let price = document.createElement("div");
        price.classList.add("product__price");
        price.innerHTML = this.price;
        product.appendChild(price);

        let rating = document.createElement("div");
        rating.classList.add("product__rating");
        for (let i=0; i<this.rating; i++) {
            // rating.innerHTML += ("X");
            let star = document.createElement("span");
            star.classList.add("fa", "fa-star");
            rating.appendChild(star);
        }
        product.appendChild(rating);

        return product;
    }

    buildPage() {
        let image = document.getElementsByClassName("product-detail__image")[0];
        image.style.backgroundImage = ("url(\"images/products/" + this.img + ".jpg\")");

        let title = document.getElementsByClassName("product-detail__name")[0];
        title.innerHTML = this.title;

        let rating = document.getElementsByClassName("product-detail__rating")[0];
        for (let i=0; i<this.rating; i++) {
            // rating.innerHTML += ("X");
            let star = document.createElement("span");
            star.classList.add("fa", "fa-star");
            rating.appendChild(star);
        }

        let price = document.getElementsByClassName("product-detail__price")[0];
        price.innerHTML = this.price;

        let desc = document.getElementsByClassName("product-detail__description")[0];
        desc.innerHTML = this.desc;
    }
}