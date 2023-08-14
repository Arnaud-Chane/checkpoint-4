DROP DATABASE IF EXISTS `mce`;
CREATE DATABASE `mce`;
USE `mce`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) UNIQUE NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` integer
);

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `task_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` integer,
  `title` varchar(255),
  `detail` varchar(255),
  `task_done` integer,
  `task_archived` integer,
  FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
);

INSERT INTO user (pseudo, email, password, is_admin)
VALUES 
  ("val", 'valerie.apert@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("val1", 'alice.johnsie@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("val2", 'robert.brown@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("val3", 'julia.lee@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("val4", 'alexandre.moreau@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("val5", 'test@gmail.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", '1');

INSERT INTO task (title, detail, user_id, task_done, task_archived) 
VALUES 
("test1", "detail de la test1", 1, 0, 0),
("test2", "detail de la test2", 1, 0, 0),
("test3", "detail de la test3", 1, 0, 0),
("test4", "detail de la test4", 1, 0, 0),
("test5", "detail de la test5", 2, 0, 0),
("test6", "detail de la test6", 2, 0, 0),
("test7", "detail de la test7", 2, 0, 0),
("test8", "detail de la test8", 3, 0, 0),
("test9", "detail de la test9", 4, 0, 0),
("test10", "detail de la test10", 6, 0, 0),
("test11", "detail de la test11", 6, 0, 0),
("test12", "detail de la test12", 6, 0, 0),
("test13", "detail de la test13", 6, 0, 0),
("test14", "detail de la test14", 6, 0, 0),
("test15", "detail de la test15", 6, 0, 0),
("test16", "detail de la test16", 6, 0, 0),
("test17", "detail de la test17", 3, 0, 0);
