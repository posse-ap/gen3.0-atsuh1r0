DROP DATABASE IF EXISTS posse;
CREATE DATABASE posse;
USE posse;

DROP TABLE IF EXISTS studyHours;
CREATE TABLE studyHours (
  id INT AUTO_INCREMENT PRIMARY KEY,
  studyHour DECIMAL(5,2),
  languages INT,
  contents INT,
  createTime TIMESTAMP
) CHARSET=utf8;

INSERT INTO studyHours (id, studyHour, languages, contents, createTime) values 
(null, 30, 1, 1, '2022-12-01 00:00:00'),
(null, 20, 2, 2, '2022-12-02 00:00:00'),
(null, 10, 3, 3, '2022-12-03 00:00:00'),
(null, 5, 4, 1, '2022-12-04 00:00:00'),
(null, 5, 5, 2, '2022-12-05 00:00:00'),
(null, 20, 6, 3, '2022-12-06 00:00:00'),
(null, 20, 7, 1, '2022-12-07 00:00:00'),
(null, 10, 8, 2, '2022-12-08 00:00:00');
