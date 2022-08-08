'use strict';

function createQuestion(questionNumber, choiceArray, question, answerNumber, reference) {
  let quiz = 
  `<div class="quiz-box">`
  + `<div class="quiz-question-box">`
  + `<h2 class="quiz-icon">Q${questionNumber}</h2>` 
  + `<h3 class="quiz-question">${question}</h3>`
  + `</div>`
  + `<img src=./img/quiz/img-quiz0${questionNumber}.png class="q${questionNumber}_img">`
  + `<div class="quiz-answer">`
  + `<h2 class="quiz-answer-icon">A</h2>`
  + `<ul class="quiz-answer-list" id="q${questionNumber}AnswerList">`;

  choiceArray.forEach(function(value, index) {
    if (index === answerNumber) {
      quiz += `<li class="quiz-answer-list-select q${questionNumber}CorrectAnswer">${value}</li>`;
    } else {
      quiz += `<li class="quiz-answer-list-select q${questionNumber}IncorrectAnswer">${value}</li>`;
    }
  });

  quiz += `</ul>`;

  if (reference !== null) {
    quiz += `<div class="reference">`
    + `<img src="/img/icon/icon-note.svg" alt="icon-note">`
    + `<p class="reference-text">${reference}</p>`
    + `</div>`;
  }

  quiz += `</div>`
  + `</div>`;

  const quizSection = document.getElementById("quizSection");
  quizSection.insertAdjacentHTML("beforeend", quiz);
}

function createHtml() {
  createQuestion(1, ["約28万人", "約79万人", "約183万人"], "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？", 0, "経済産業省 2019年3月 - IT人材需給に関する調査")
  createQuestion(2, ["INTECH", "BIZZTECH", "X-TECH"], "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？", 2, null)
  createQuestion(3, ["Internet of Things", "Integrate Technology", "Infomation on Tool"], "IoTとは何の略でしょう？", 0, null)
  createQuestion(4, ["Society5.0", "CyPhy", "SDGs"], "日本が目指すサイバー空間とフィジカル空間を硬度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？", 0, "Society5.0 - 科学技術政策 - 内閣府")
  createQuestion(5, ["Web3.0", "NFT", "メタバース"], "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？", 0, null)
  createQuestion(6, ["約2倍", "約5倍", "約11倍"], "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？", 1, "Accenture Technology Vision 2021")
}

{
  createHtml();
}
