'use strict';

const quizList = [
  {"questionNumber" : 1, "choiceArray" : ["約28万人", "約79万人", "約183万人"], "question" : "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？", "answerNumber" : 1, "reference" : "経済産業省 2019年3月 - IT人材需給に関する調査"},
  {"questionNumber" : 2, "choiceArray" : ["INTECH", "BIZZTECH", "X-TECH"], "question" : "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？", "answerNumber" : 2, "reference" : null},
  {"questionNumber" : 3, "choiceArray" : ["Internet of Things", "Integrate Technology", "Infomation on Tool"], "question" : "IoTとは何の略でしょう？", "answerNumber" : 0, "reference" : null},
  {"questionNumber" : 4, "choiceArray" : ["Society5.0", "CyPhy", "SDGs"], "question" : "日本が目指すサイバー空間とフィジカル空間を硬度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？", "answerNumber" : 0, "reference" : "Society5.0 - 科学技術政策 - 内閣府"},
  {"questionNumber" : 5, "choiceArray" : ["Web3.0", "NFT", "メタバース"], "question" : "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？", "answerNumber" : 0, "reference" : null},
  {"questionNumber" : 6, "choiceArray" : ["約2倍", "約5倍", "約11倍"], "question" : "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？", "answerNumber" : 1, "reference" : "Accenture Technology Vision 2021"},
];

const answers = [
  '約79万人',
  'X-TECH',
  'internet of Things',
  'Society 5.0',
  'Web3.0',
  '約5倍',
];

function arrayShuffle(quizList) {
  for (var i = quizList.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = quizList[i];
    quizList[i] = quizList[r];
    quizList[r] = tmp;
  }
}

function createQuestion(displayNum, questionNumber, choiceArray, question, answerNumber, reference) {
  let quiz = 
  `<div class="quiz-box">`
  + `<div class="quiz-question-box">`
  + `<h2 class="quiz-icon">Q${displayNum}</h2>` 
  + `<h3 class="quiz-question">${question}</h3>`
  + `</div>`
  + `<img src=./img/quiz/img-quiz0${questionNumber}.png class="q${questionNumber}_img">`
  + `<div class="quiz-answer">`
  + `<h2 class="quiz-answer-icon">A</h2>`
  + `<ul class="quiz-answer-list" id="q${questionNumber}AnswerList">`;

  choiceArray.forEach(function(value, index) {
    if (index === answerNumber) {
      quiz += `<li class="quiz-answer-list-select" id="q${questionNumber}CorrectAnswer">${value}</li>`;
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
  arrayShuffle(quizList);

  for (let num = 0; num < 6; num++) {
    createQuestion(num+1, quizList[num].questionNumber, quizList[num].choiceArray, quizList[num].question, quizList[num].answerNumber, quizList[num].reference);
  }
}

{
  createHtml();

  for (let quizNum=1; quizNum <= 6; quizNum++) {
    let clickNum = 0;

    const correctAnswer = document.getElementById('q' + quizNum + 'CorrectAnswer');
    correctAnswer.addEventListener('click', () => {
      if (clickNum === 0) {
        // クリックした選択肢を強調
        correctAnswer.classList.add('emphasis-choice');
        // 正解の表示
        const correctBox = document.createElement('div');
        correctBox.classList.add('correct-box');
        correctBox.textContent = '正解！';
  
        const correctBoxText = document.createElement('div');
        correctBoxText.classList.add('correct-box-text');
  
        const correctBoxA = document.createElement('div');
        correctBoxA.classList.add('correct-box-A');
        correctBoxA.textContent = 'A';
  
        const correctBoxP = document.createElement('p');
        correctBoxP.classList.add('correct-box-P');
        correctBoxP.textContent = answers[quizNum-1];
        
        const answerList = document.getElementById('q' + quizNum + 'AnswerList');
        answerList.after(correctBox);
        correctBox.appendChild(correctBoxText);
        correctBoxText.appendChild(correctBoxA);
        correctBoxText.appendChild(correctBoxP);
  
        clickNum++;
      }
    });
  
    const incorrectAnswer = document.getElementsByClassName('q' + quizNum + 'IncorrectAnswer');
    const incorrectAnswers = Array.from(incorrectAnswer);
    incorrectAnswers.forEach(element => {
      element.addEventListener('click', () => {
        if (clickNum === 0) {
          // クリックした選択肢の強調
          element.classList.add('emphasis-choice');
          // 不正解の表示
          const incorrectBox = document.createElement('div');
          incorrectBox.classList.add('incorrect-box');
          incorrectBox.textContent = '不正解...';
    
          const correctBoxText = document.createElement('div');
          correctBoxText.classList.add('correct-box-text');
    
          const correctBoxA = document.createElement('div');
          correctBoxA.classList.add('correct-box-A');
          correctBoxA.textContent = 'A';
    
          const correctBoxP = document.createElement('p');
          correctBoxP.classList.add('correct-box-P');
          correctBoxP.textContent = answers[quizNum-1];
          
          const answerList = document.getElementById('q' + quizNum + 'AnswerList');
          answerList.after(incorrectBox);
          incorrectBox.appendChild(correctBoxText);
          correctBoxText.appendChild(correctBoxA);
          correctBoxText.appendChild(correctBoxP);
    
          clickNum++;
        }
      });
    });
  }
}
