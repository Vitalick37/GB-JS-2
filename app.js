'use strict';
// const goods = [{
//         title: 'Shirt',
//         price: 150
//     },
//     {
//         title: 'Socks',
//         price: 150
//     },
//     {
//         title: 'Jacket',
//         price: 150
//     },
//     {
//         title: 'Shoes',
//         price: 150
//     },
// ];

// const renderGoodsItem = (title = 'Товар', price = 'Цена') => 
// `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;


// const renderGoodsList = (list) => {
//     const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
// };

// renderGoodsList(goods);


// 
// 
// Товар на странице

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><img src="img/photo_widjet_3.png" alt="foto"><h3>${this.title}</h3><p>${this.price}</p></div>`;
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
        this.goods = [{
                title: 'Shirt',
                price: 150
            },
            {
                title: 'Socks',
                price: 150
            },
            {
                title: 'Jacket',
                price: 150
            },
            {
                title: 'Shoes',
                price: 150
            },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            let goodsItem = new GoodsItem(good.title, good.price);
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
list.fetchGoods();
list.render();
list.sumGoods();
// 
// 
// Товар в корзине

class CrateGoodsItem {
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
class CrateGoods {
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