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

class GoodsItem {
constructor (title, price) {
    this.title = title;
    this.price = price;
}
render () {
   return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
}
};

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
};
let list = new GoodsList();
list.fetchGoods();
list.render();