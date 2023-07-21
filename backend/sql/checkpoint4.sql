DROP DATABASE IF EXISTS `checkpoint4`;
CREATE DATABASE `checkpoint4`;
USE `checkpoint4`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` integer
);

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `tasks_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` integer,
  `name` varchar(255),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
);

INSERT INTO users (email, password, is_admin)
VALUES 
  ('valerie.apert@example.com', "$argon2id$v=19$m=65536,t=5,p=1$+rX0+tbD6WFYqAiz8HHMIQ$8i3zbqOEx1OcsxPG8lgeXQ6MeRtStrcgRbN7pqCTAy8", 0),
  ('alice.johnsie@example.com', "$argon2id$v=19$m=65536,t=5,p=1$+rX0+tbD6WFYqAiz8HHMIQ$8i3zbqOEx1OcsxPG8lgeXQ6MeRtStrcgRbN7pqCTAy8", 0),
  ('robert.brown@example.com', "$argon2id$v=19$m=65536,t=5,p=1$+rX0+tbD6WFYqAiz8HHMIQ$8i3zbqOEx1OcsxPG8lgeXQ6MeRtStrcgRbN7pqCTAy8", 0),
  ('julia.lee@example.com', "$argon2id$v=19$m=65536,t=5,p=1$+rX0+tbD6WFYqAiz8HHMIQ$8i3zbqOEx1OcsxPG8lgeXQ6MeRtStrcgRbN7pqCTAy8", 0),
  ('alexandre.moreau@example.com', "$argon2id$v=19$m=65536,t=5,p=1$+rX0+tbD6WFYqAiz8HHMIQ$8i3zbqOEx1OcsxPG8lgeXQ6MeRtStrcgRbN7pqCTAy8", 0),
  ('test@gmail.com', "$argon2id$v=19$m=65536,t=5,p=1$+rX0+tbD6WFYqAiz8HHMIQ$8i3zbqOEx1OcsxPG8lgeXQ6MeRtStrcgRbN7pqCTAy8", '1');

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
