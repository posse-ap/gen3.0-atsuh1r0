'use strict'

const contents = ['N予備校', 'ドットインストール', 'POSSE課題'];
const languages = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'SQL', 'SHELL', '情報システム基礎知識（その他）'];

{
  // 今月の日時を取得
  const now = new Date();

  const post = document.getElementById('post');
  
  post.addEventListener('click', () => {
    let modal = `<div class="modal-back-color" id="modalRemove">`
    + `<div class="modal">`
    + `<div class="modal-close" id="modalClose"><div></div><p>×</p></div>`
    + `<div class="modal-input-content">`;

    modal += `<div class="modal-left">`
    + `<div class="modal-date">`
    + `<p class="modal-lists">学習日</p>`
    + `<div class="modal-date-input" id="learnDate">${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日</div>`
    + `</div>`
    + `<div class="modal-contents">`
    + `<p class="modal-lists">学習コンテンツ（複数選択可）</p>`
    + `<ul class="modal-contents-lists">`;

    contents.forEach(element => {
      modal += `<li class="modal-contents-list"><span>✔</span>${element}</li>`
    });

    modal += `</ul>`
    + `</div>`
    + `<div class="modal-languages">`
    + `<p  class="modal-lists">学習言語（複数選択可）</p>`
    + `<ul class="modal-languages-lists">`;

    languages.forEach(element => {
      modal += `<li class="modal-languages-list"><span>✔</span>${element}</li>`
    });

    modal += `</ul>`
    + `</div>`
    + `</div>`

    modal += `<div class="modal-right">`
    + `<div class="modal-hour">`
    + `<p  class="modal-lists">学習時間</p>`
    + `<input type="text" class="modal-hour-text"></input>`
    + `</div>`
    + `<div class="modal-twitter">`
    + `<p  class="modal-lists">Twitter用コメント</p>`
    + `<textarea class="modal-twitter-text"></textarea>`
    + `<div><span>✔</span>Twitterにシェアする</div>`
    + `</div>`
    + `</div>`

    modal += `</div>`
    + `<button class="modal-post">記録・投稿</button>`
    + `</div></div>`;

    const body = document.getElementById('body');
    body.insertAdjacentHTML('beforeBegin', modal);

    // モーダルを閉じる
    const modalClose = document.getElementById('modalClose');
    modalClose.addEventListener('click', () => {
      const modalRemove = document.getElementById('modalRemove');
      modalRemove.remove();
    })

    // 学習日カレンダーモーダル
    const learnDate = document.getElementById('learnDate');
    learnDate.addEventListener('click', () => {
      alert()
      // console.log(learnDate.innerHTML)
      // console.log(learnDate)
    })

    // 選択した際の挙動
    const modalContentsList = document.getElementsByClassName('modal-contents-list');
    const modalContentsLists = Array.from(modalContentsList);
    const modalLanguagesList = document.getElementsByClassName('modal-languages-list');
    const modalLanguagesLists = Array.from(modalLanguagesList);

    modalContentsLists.forEach(element => {
      element.addEventListener('click', () => {
        element.classList.toggle('modal-contents-list-clicked');
      })
    })
    modalLanguagesLists.forEach(element => {
      element.addEventListener('click', () => {
        element.classList.toggle('modal-contents-list-clicked');
      })
    })

  })
}
