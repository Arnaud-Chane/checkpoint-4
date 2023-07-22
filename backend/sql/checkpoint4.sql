DROP DATABASE IF EXISTS `checkpoint4`;
CREATE DATABASE `checkpoint4`;
USE `checkpoint4`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` integer
);

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `task_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` integer,
  `name` varchar(255),
  `task_done` integer,
  `task_archived` integer,
  FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
);

INSERT INTO user (email, password, is_admin)
VALUES 
  ('valerie.apert@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ('alice.johnsie@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ('robert.brown@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ('julia.lee@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ('alexandre.moreau@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ('test@gmail.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", '1');

INSERT INTO task (name, user_id, task_done,task_archived) 
VALUES 
("test1", 1, 0, 0),
("test2", 1, 0, 0),
("test3", 1, 0, 0),
("test4", 1, 0, 0),
("test5", 2, 0, 0),
("test6", 2, 0, 0),
("test7", 2, 0, 0),
("test8", 3, 0, 0),
("test9", 4, 0, 0),
("test10", 3, 0, 0);
