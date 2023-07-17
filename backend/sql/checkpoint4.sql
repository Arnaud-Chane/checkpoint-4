DROP DATABASE IF EXISTS `checkpoint4`;
CREATE DATABASE `checkpoint4`;
USE `checkpoint4`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL
);

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `tasks_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` integer,
  `name` varchar(255),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
);

INSERT INTO users (email, password)
VALUES 
  ('valerie.apert@example.com', "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"),
  ('alice.johnsie@example.com', "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"),
  ('robert.brown@example.com', "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"),
  ('julia.lee@example.com', "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"),
  ('alexandre.moreau@example.com', "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ");

INSERT INTO tasks (name, user_id) 
VALUES 
("test1", 1),
("test2", 1),
("test3", 1),
("test4", 1),
("test5", 1),
("test6", 1),
("test7", 1),
("test8", 1),
("test9", 1),
("test10", 1);
