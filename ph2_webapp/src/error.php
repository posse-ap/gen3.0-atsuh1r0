<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>webapp</title>
  <link rel="stylesheet" href="./styles/reset.css">
  <link rel="stylesheet" href="./styles/style.css">
</head>
<body id="body">
  <header class="header">
    <div class="header-left">
      <img src="./img/logo.svg" alt="logo">
      <p class="header-week-cnt" id="thisWeek"></p>
    </div>
  </header>
  <main class="main">
    <section class="error">
      <div class="error-icon">
        <p class="error-icon-orange">ERROR</p>
        <div class="error-icon-mark">!</div>
      </div>
      <div class="error-text">
        <p>一次的にご利用できない状態です。</p>
        <p>しばらく経ってから</p>
        <p>再度アクセスしてください。</p>
      </div>
    </section>
  </main>
  <footer></footer>
  <script src="./js/date.js"></script>
</body>
</html>
