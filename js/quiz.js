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

