class Product {
    constructor(item) {
        this.title = item.title
        this.desc = item.desc
        this.price = item.price
        this.rating = item.rating
        this.img = item.img
    }

    buildItem() {
        console.log(this);
        // let itemBlock = document.createElement("div")
        // itemBlock.classList.add("itemBlock")
        //
        // let catImage = document.createElement("div")
        // catImage.classList.add("catImage")
        // catImage.style.backgroundImage = 'url("images/' + imgSrc + '")'
        // itemBlock.appendChild(catImage)
        //
        // let catTitle = document.createElement("div")
        // catTitle.textContent = title
        // catTitle.classList.add("catTitle")
        // itemBlock.appendChild(catTitle)
        //
        // let catDesc = document.createElement("div")
        // catDesc.textContent = desc
        // catDesc.classList.add("catDesc")
        // itemBlock.appendChild(catDesc)

        //starr
        let product = document.createElement("div");
        product.classList.add("product");

        let image = document.createElement("div");
        image.classList.add("product__image");
        image.style.backgroundImage = this.img;
        product.appendChild(image);

        let price = document.createElement("div");
        price.classList.add("product__price");
        price.innerHTML = this.price;
        product.appendChild(price);

        let desc = document.createElement("div");
        desc.classList.add("product__desc");
        desc.innerHTML = this.desc;
        product.appendChild(desc);

        let rating = document.createElement("div");
        rating.classList.add("product__rating");
        for (let i=0; i<this.rating; i++) {
            rating.innerHTML += ("X");
        }
        product.appendChild(rating);

        return product;
    }
}