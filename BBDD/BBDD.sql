create database FiltroEduarChanaga;
use FiltroEduarChanaga;

create table Contenido (
id int primary key auto_increment,
nombre varchar(100) not null,
tipo enum("Serie","Pelicula","Libro","Podcast","Videojuego") not null,
genero varchar(100) not null,
estado enum("Pendiente","Viendo","Terminado","Abandonado","En Pausa") not null,
plataforma varchar(100) not null,
calificacion decimal(10,1) not null,
comentario varchar(500) not null
);



create table Usuario(
    id int primary key auto_increment,
    rol varchar(50),
    username varchar(50) not null,
    email varchar(125) not null,
    password varchar(300)
);
INSERT INTO Usuario (rol, username, email, password)
VALUES 
('Manager', 'pedro', 'user1@gmail.com', '$2a$10$yTIUErpq0/rbXz.yQSkEHO6yhIbM/hhL5FDKR9.pwOEU0tf8HKst.'),
('Manager', 'daza', 'user2@gmail.com', '$2a$10$ub4KQHn8GPd.sAPeeu22vOZ.4R/YJC3h8IHxFUpetqzwEhClIc4Q2'),
('Manager', 'chanaga', 'user3@gmail.com', '$2a$10$8XprS01Ok/y7lakYztM57u3fKqe65KdRgBn1/QXBM8zc.zMN7IrbO');

