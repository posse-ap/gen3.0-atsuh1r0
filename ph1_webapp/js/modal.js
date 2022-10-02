'use strict'

const contents = ['N予備校', 'ドットインストール', 'POSSE課題'];
const languages = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'SQL', 'SHELL', '情報システム基礎知識（その他）'];

{
  // 今月の日時を取得
  const now = new Date();

  const post = document.getElementById('post');
  
  post.addEventListener('click', () => {
    let modal = `<div class="modal-back-color" id="modalRemove">`
    + `<div class="modal" id="modal">`
    + `<div class="modal-close" id="modalClose"><div></div><p>×</p></div>`
    + `<div class="modal-input-content-and-button" id="modalInputContentAndButton">`
    + `<div class="modal-input-content" id="modalInputContent">`;

    modal += `<div class="modal-left">`
    + `<div class="modal-date">`
    + `<p class="modal-lists">学習日</p>`
    + `<input type="date" class="modal-date-input" id="learnDate" value="${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getDate()}"></input>`
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
    + `<button class="modal-post" id="record">記録・投稿</button>`
    + `</div></div></div>`;

    const body = document.getElementById('body');
    body.insertAdjacentHTML('beforeBegin', modal);

    // モーダルを閉じる
    const modalClose = document.getElementById('modalClose');
    modalClose.addEventListener('click', () => {
      const modalRemove = document.getElementById('modalRemove');
      modalRemove.remove();
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

    const record = document.getElementById('record');
    record.addEventListener('click', () => {
      const modalInputContent = document.getElementById('modalInputContent');
      const modalInputContentAndButton = document.getElementById('modalInputContentAndButton');
      const modalRoadHeight = modalInputContentAndButton.getBoundingClientRect().height;
      record.style.display = "none";
      modalInputContentAndButton.style.height = modalRoadHeight + 'px';
      modalInputContent.innerHTML = `<div class="modal-loading"></div>`;

      // 5秒ロード後に画面遷移
      function finishLoad() {
        modalInputContent.innerHTML = `<div class="modal-loading-finish">`
        + `<div class="modal-loading-finish-title">AWESOME!</div>`
        + `<div class="modal-loading-finish-check"></div>`
        + `<p>記録・投稿<br>完了しました</p>`
        + `</div>`;
      }
      setTimeout(finishLoad, 5000);
    });
  })
}
