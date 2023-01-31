<?php
require_once(__DIR__ . '/db/pdo.php');
$db = getDb();

$objDateTime = new DateTimeImmutable('now');
// 表示させる月の取得
if (!empty($_GET)) {
  $month = $_GET['month'];
} else {
  $month = 0;
}
// 学習時間を取得
$todayStudyHours = $db->query("SELECT COALESCE(sum(studyHour), 0) FROM studyHours WHERE createTime BETWEEN '" . $objDateTime->format('Y-m-d 00:00:00') . "' AND '" . $objDateTime->format('Y-m-d 23:59:59') . "'")->fetchColumn();
$totalStudyHours = $db->query("SELECT COALESCE(sum(studyHour), 0) FROM studyHours")->fetchColumn();

// 表示月の学習時間を取得
$displayMonth = $objDateTime->modify('first day of this month')->modify($month . ' months')->format('Y年m月');
$thisMonthStudyHours = $db->query("SELECT COALESCE(sum(studyHour), 0) FROM studyHours WHERE createTime BETWEEN '" . $objDateTime->modify('first day of this month')->modify($month . ' months')->format('Y-m-01 00:00:00') . "' AND '" . $objDateTime->modify('first day of this month')->modify($month . ' months')->modify('last day of this month')->format('Y-m-d 23:59:59') . "'")->fetchColumn();
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>webapp</title>
  <link rel="stylesheet" href="./assets/styles/reset.css">
  <link rel="stylesheet" href="./assets/styles/style.css">
</head>
<body id="body">
  <header class="header">
    <div class="header-left">
      <img src="../assets/img/logo.svg" alt="logo">
      <p class="header-week-cnt" id="thisWeek"></p>
    </div>
    <button class="post" id="post">記録・投稿</button>
  </header>
  <main class="main">
    <div class="main-left">
      <section class="study-hours">
        <div class="today-wrapper">
          <div class="study-hours-title">Today</div>
          <div class="study-hours-hour" id="studyHoursToday"><?= $todayStudyHours ?></div>
          <div class="study-hours-unit">hour</div>
        </div>
        <div class="month-wrapper">
          <div class="study-hours-title">Month</div>
          <div class="study-hours-hour" id="studyHoursMonth"><?= $thisMonthStudyHours ?></div>
          <div class="study-hours-unit">hour</div>
        </div>
        <div class="total-wrapper">
          <div class="study-hours-title">Total</div>
        <div class="study-hours-hour" id="studyHoursTotal"><?= $totalStudyHours ?></div>
        <div class="study-hours-unit">hour</div>
        </div>
      </section>
      <div class="section-border"></div>
      <section>
        <canvas id="studyHoursGraph">
          Canvas not supported...
        </canvas>
      </section>
    </div>
    <div class="main-right">
      <section class="languages-wrapper">
        <div class="languages-title">学習言語</div>
        <div class="languages-chart" id="languagesChartWrapper">
          <canvas id="languagesPieChart">
            Canvas not supported...
          </canvas>
        </div>
      </section>
      <section class="contents-wrapper">
        <div class="contents-title">学習コンテンツ</div>
        <div class="contents-chart" id="contentsChartWrapper">
          <canvas id="contentsPieChart">
            Canvas not supported...
          </canvas>
        </div>
      </section>
    </div>
  </main>
  <footer class="footer">
    <? if(is_null($month)): ?>
      <a href="./index.php?month=-1" class="one-month-before"><</a>
      <div id="displayDate"><?= $displayMonth ?></div>
      <a href="./index.php?month=1" class="one-month-later">></a>
    <? else: ?>
      <a href="./index.php?month=<?= $month - 1?>" class="one-month-before"><</a>
      <div id="displayDate"><?= $displayMonth ?></div>
      <a href="./index.php?month=<?= $month + 1?>" class="one-month-later">></a>
    <? endif; ?>
  </footer>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js" integrity="sha512-ElRFoEQdI5Ht6kZvyzXhYG9NqjtkmlkfYk0wr6wHxU9JEHakS7UJZNeml5ALk+8IKlU6jDgMabC3vkumRokgJA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- chartjs-plugin-datalabels------------------------------ -->
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.1.0"></script>
  <script src="https://kit.fontawesome.com/afb3b2864c.js" crossorigin="anonymous"></script>
  <script src="./assets/script/modal.js"></script>
</body>
</html>

<?php
// chart処理用のファイルの読み込み
require_once(__DIR__ . '/chart.php');
