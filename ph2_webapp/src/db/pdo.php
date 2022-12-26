<?php

function getDb() {
  $dbh = '';
  try {
    $dsn = 'mysql:dbname=posse;host=db';
    $user = 'root';
    $password = 'root';
    $dbh = new PDO($dsn, $user, $password);
  } catch (PDOException $e) {
    echo 'DB接続エラー: ' . $e->getMessage(); 
  }
  return $dbh;
}
