'use strict';

{
  console.log(document.getElementById('q1-correct-answer'))
  document.getElementById('q1-correct-answer').addEventListener('click', () => {
    console.log('正解');
  });
  document.getElementById('q1-incorrect-answer').addEventListener('click', () => {
    console.log('不正解');
  });
}

