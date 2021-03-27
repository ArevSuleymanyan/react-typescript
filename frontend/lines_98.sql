CREATE DATABASE color_lines;
USE color_lines;

CREATE TABLE users 
(
id int auto_increment not null primary key,
name varchar(30) not null,
email varchar(155) not null,
password varchar(255) not null
);

CREATE TABLE game 
(
user_id int ,
game_id int not null auto_increment primary key,
game_board json not null,
score int,
foreign key (user_id) references users(id)
);

CREATE TABLE picture 
(
user_id int,
img_id int not null auto_increment primary key,
image varchar(255),
foreign key (user_id) references user(id)
);

ALTER TABLE users RENAME COLUMN id TO  user_id;
