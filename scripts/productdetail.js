productData = {
    "title": "The Original Round Robin",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium massa vitae augue vehicula posuere. Ut gravida ante at maximus mollis. Ut vel eros dictum, auctor metus in, feugiat nisl. Mauris ac arcu risus. Sed commodo justo magna, at rutrum diam auctor eu!",
    "price": "$112.00",
    "rating": "5",
    "img": "1"
};

relatedProducts = [
    {
        "title": "Fluffmaster 3000",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium massa vitae augue vehicula posuere. Ut gravida ante at maximus mollis. Ut vel eros dictum, auctor metus in, feugiat nisl. Mauris ac arcu risus. Sed commodo justo magna, at rutrum diam auctor eu!",
        "price": "$54.99",
        "rating": "4",
        "img": "3"
    },
    {
        "title": "Couch Perfection",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium massa vitae augue vehicula posuere. Ut gravida ante at maximus mollis. Ut vel eros dictum, auctor metus in, feugiat nisl. Mauris ac arcu risus. Sed commodo justo magna, at rutrum diam auctor eu!",
        "price": "99.00",
        "rating": "3",
        "img": "4"
    },
    {
        "title": "Fun Floor Poof",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium massa vitae augue vehicula posuere. Ut gravida ante at maximus mollis. Ut vel eros dictum, auctor metus in, feugiat nisl. Mauris ac arcu risus. Sed commodo justo magna, at rutrum diam auctor eu!",
        "price": "$89.99",
        "rating": "5",
        "img": "5"
    },
    {
        "title": "Fluffmaster 3001",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium massa vitae augue vehicula posuere. Ut gravida ante at maximus mollis. Ut vel eros dictum, auctor metus in, feugiat nisl. Mauris ac arcu risus. Sed commodo justo magna, at rutrum diam auctor eu!",
        "price": "$59.99",
        "rating": "5",
        "img": "6"
    }
];

count = 1;

function loadPage() {
    let sections = document.getElementsByClassName("related-products");

    for (let section of sections) {
        for (let product of relatedProducts) {
            let productObj = new Product(product);
            let productHTML = productObj.buildThumbnail();
            section.appendChild(productHTML);
        }
    }
}

function loadProduct() {
    let product = new Product(productData);
    product.buildPage();
}

function increment() {
    let control = document.getElementById("count");
    ++count;
    control.innerHTML = count;
}

function decrement() {
    let control = document.getElementById("count");
    if (count > 1) {--count;}
    control.innerHTML = count;
}

function changeColor(val) {
    let color = document.getElementById("colorpreview");

    switch (val) {
        case "1":
            color.style.backgroundColor = "#d1ffee";
            break;
        case "2":
            color.style.backgroundColor = "#bb93ff";
            break;
        case "3":
            color.style.backgroundColor = "#ffd25a";
            break;
        case "4":
            color.style.backgroundColor = "#252a36";
            break;
    }
}

function changeFill(val) {
    console.log(val);
}

