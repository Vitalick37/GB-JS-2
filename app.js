'use strict';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else {
            xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let body = (JSON.parse(xhr.responseText));
                resolve(body);
            }
            xhr.onerror = function (err) {
                PromiseRejectionEvent(err);
            }
        };

        xhr.open('GET', url);
        xhr.send();
    });
};




class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><img src="img/photo_widjet_3.png" alt="foto"><h3>${this.title}</h3><p>${this.price}</p><button class="goods-add">Добавить</button></div>`;
    }
};
// 
// 
// Список товаров на странице
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        return makeGETRequest(`${API_URL}/catalogData.json`).then((goods) => {
                this.goods = goods;
            });
        }

        // .then(res => {
        //     this.goods = res;
        //     this.render()
        // })
        // .catch(err => console.error(err));
    
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            let goodsItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodsItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    sumGoods() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        });
        console.log(sum);
    }
};
let list = new GoodsList();
list.fetchGoods().then(() => {
    list.render();
});

list.sumGoods();
// 
// 
// Товар в корзине

class CartGoodsItem {
    constructor(title, price, count) {
        this.title = title;
        this.price = price;
        this.count = count;
    }
    render() {
        return `<div class="crate-item"><h3>${this.title}</h3><p>${this.price}</p><p>${this.count}</p></div>`;
    }
};
// 
// 
// Крзина товаров


class CartGoods {
    constructor() {
        this.goods = [];
    }
    addItemCrate(newItem) {
        this.goods.push(newItem);
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            let goodsItem = new CrateGoodsItem(good.title, good.price, good.count);
            listHtml += goodsItem.render();
        });

    }

};
// 
// 
// Открытие\закрытие корзины

let openCart = document.querySelector('.cart-button'),
    cart = document.querySelector('.shopping-cart'),
    close = document.querySelector('.cart-close');


openCart.addEventListener('click', function () {
    cart.style.display = 'flex';
});


close.addEventListener('click', function () {
    cart.style.display = 'none';
});