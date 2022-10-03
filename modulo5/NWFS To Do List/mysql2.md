Use `Hopper-4314114-natalia-nascimento`;

CREATE TABLE LISTATASK ( 
id VARCHAR(255) PRIMARY KEY, 
title VARCHAR (30) NOT NULL, 
description TEXT NOT NULL, 
creatorUserNickname VARCHAR(30) NOT NULL 
);

INSERT INTO LISTATASK (id, title, description, limit_date, creator_user_id)
VALUES (
"003", 
"Criar banco de alunos",
"Devemos criar o banco dos alunos para o módulo do backend",
STR_TO_DATE (
"limiteDate", '04/05/2020'),
"ceatorUserId", "001"
);