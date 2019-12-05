'use strict';
const goods = [{
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

const renderGoodsItem = (title = 'Товар', price = 'Цена') => `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;


const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
};

renderGoodsList(goods);