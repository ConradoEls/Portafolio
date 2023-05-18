// -----> JS navbar (Header)
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurguer = document.querySelector('.menu');
const shopCart = document.querySelector('.navbar-shopping-cart');
const menuShopCart = document.querySelector('#shoppingCartContainer');

// here add functions to the click-events of the menus

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
shopCart.addEventListener('click', toggleShopCart);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    menuShopCart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
};

function toggleMobileMenu(){
    menuShopCart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
};

function toggleShopCart(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    menuShopCart.classList.toggle('inactive');
    productDetail.classList.add('inactive');
};

// -----> JS Main

const productDetail = document.querySelector('#product-detail');
const closeProductDetail = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

function openProduct(){
    productDetail.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    menuShopCart.classList.add('inactive');
}

function closeProduct(){
    productDetail.classList.add('inactive')
}

closeProductDetail.addEventListener('click', closeProduct);

const productList = [];
productList.push({
    name: 'Bike',
    price: 40,
    image: 'https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648_1280.jpg',
});
productList.push({
    name: 'Toy',
    price: 20,
    image: 'https://cdn.pixabay.com/photo/2016/03/26/22/22/happy-1281590_640.jpg',
});
productList.push({
    name: 'MacBook Pro',
    price: 410,
    image: 'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg',
});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src', product.image);
        imageProduct.addEventListener('click', openProduct)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');

        const imageCart = document.createElement('img');
        imageCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(imageCart);
        productInfoDiv.append(productPrice,productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(imageProduct, productInfo);

        cardsContainer.append(productCard);
    }
};

renderProducts(productList);
