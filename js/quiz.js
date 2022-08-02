'use strict';

const answers = [
  '約79万人',
  'X-TECH',
  'internet of Things',
  'Society 5.0',
  'Web3.0',
  '約5倍',
];

{
  for (let quizNum=1; quizNum <= 6; quizNum++) {
    let clickNum = 0;
    document.getElementById('q' + quizNum + 'CorrectAnswer').addEventListener('click', () => {
      if (clickNum === 0) {
        const correctBox = document.createElement('div');
        correctBox.classList.add('correctBox');
        correctBox.textContent = '正解！';
  
        const correctBoxText = document.createElement('div');
        correctBoxText.classList.add('correctBoxText');
  
        const correctBoxA = document.createElement('div');
        correctBoxA.classList.add('correctBoxA');
        correctBoxA.textContent = 'A';
  
        const correctBoxP = document.createElement('p');
        correctBoxP.classList.add('correctBoxP');
        correctBoxP.textContent = answers[quizNum-1];
        
        const answerList = document.getElementById('q' + quizNum + 'AnswerList');
        answerList.after(correctBox);
        correctBox.appendChild(correctBoxText);
        correctBoxText.appendChild(correctBoxA);
        correctBoxText.appendChild(correctBoxP);
  
        clickNum++;
      }
    });
  
    document.getElementById('q' + quizNum + 'IncorrectAnswer').addEventListener('click', () => {
      if (clickNum === 0) {
        const incorrectBox = document.createElement('div');
        incorrectBox.classList.add('incorrectBox');
        incorrectBox.textContent = '不正解...';
  
        const correctBoxText = document.createElement('div');
        correctBoxText.classList.add('correctBoxText');
  
        const correctBoxA = document.createElement('div');
        correctBoxA.classList.add('correctBoxA');
        correctBoxA.textContent = 'A';
  
        const correctBoxP = document.createElement('p');
        correctBoxP.classList.add('correctBoxP');
        correctBoxP.textContent = answers[quizNum-1];
        
        const answerList = document.getElementById('q' + quizNum + 'AnswerList');
        answerList.after(incorrectBox);
        incorrectBox.appendChild(correctBoxText);
        correctBoxText.appendChild(correctBoxA);
        correctBoxText.appendChild(correctBoxP);
  
        clickNum++;
      }
    });
  }
}

