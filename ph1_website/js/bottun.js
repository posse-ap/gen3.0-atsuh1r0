'use strict';

const menuBar = document.getElementById('openMenu');
menuBar.addEventListener('click', () => {


  let menuPage = `<div class="menu" id="menu">`;

  // ヘッダー
  menuPage += `<div class="menu-header">`
  + `<img src="./img/logo.svg" alt="posse-icon" class="posse-icon">`
  + `<div class="close-menu" id="closeMenu">×</div>`
  + `</div>`;

  menuPage += `<section class="menu-nav">`;
  menuPage += `<div class="menu-list">`
  + `<a href="./index.html" class="menu-item">POSSEとは</a>`
  + `<a href="./quiz.html" class="menu-item">クイズ</a>`
  + `</div>`;

  menuPage += `<div class="menu-link">`
  menuPage += `<a href="https://line.me/R/ti/p/@651htnqp?from=page" target="_blank" class="menu-line">`
  + `<img src="./img/icon/icon-line.svg" alt="menu-line-icon" class="menu-line-icon">`
  + `<div class="menu-line-msg">POSSE公式LINEを追加</div>`
  + `<img src="./img/icon/icon-link-light.svg" alt="line-banner-link-icon">`
  + `</a>`;

  menuPage += `<a href="https://posse-ap.com/" target="_blank" class="official-website content-center">POSSE公式サイト`
  + `<img src="./img/icon/icon-link-gray-dark.svg" alt="icon-link" class="official-website-link">`
  + `</a>`;
  menuPage += `</div>`

  menuPage += `<div class="menu-sns-icon">`
  + `<div class="circle-border">`
  + `<a href="https://twitter.com/posse_program" target="_blank"><img src="./img/icon/icon-twitter.svg" alt="icon-twitter" class="nav-icon"></a>`
  + `</div>`
  + `<div class="circle-border">`
  + `<a href="https://www.instagram.com/posse_programming/" target="_blank"><img src="./img/icon/icon-instagram.svg" alt="icon-instagram" class="nav-icon"></a>`
  + `</div>`
  + `</div>`;

  menuPage += `</section>`;

  const header = document.getElementsByTagName('header')[0]
  header.insertAdjacentHTML("beforebegin", menuPage);

  // メニューを閉じる
  const closeMenu = document.getElementById('closeMenu');
  console.log(closeMenu)
  closeMenu.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.remove();
  })
});

