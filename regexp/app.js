'use strict';

let text = document.querySelector('.text'),
    btnReplace = document.querySelector('.replace');

btnReplace.addEventListener('click', () => {
    let regexp = /\B'|'\B/g;
    text.textContent = text.textContent.replace(regexp, '"');
});
