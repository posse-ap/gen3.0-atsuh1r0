DROP DATABASE IF EXISTS posse;
CREATE DATABASE posse;
USE posse;

DROP TABLE IF EXISTS studyHours;
CREATE TABLE studyHours (
  id INT AUTO_INCREMENT PRIMARY KEY,
  studyHour INT,
  languages INT,
  contents INT,
  learnDate DATE
) CHARSET=utf8;

INSERT INTO studyHours (id, studyHour, languages, contents, learnDate) values 
(null, 30, 1, 1, '2022-12-01'),
(null, 20, 2, 2, '2022-12-02'),
(null, 10, 3, 3, '2022-12-03'),
(null, 5, 4, 1, '2022-12-04'),
(null, 5, 5, 2, '2022-12-05'),
(null, 20, 6, 3, '2022-12-06'),
(null, 20, 7, 1, '2022-12-07'),
(null, 10, 8, 2, '2022-12-08');
