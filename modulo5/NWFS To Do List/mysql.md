Use `Hopper-4314114-natalia-nascimento`;

CREATE TABLE LISTAUSUARIOS ( 
id VARCHAR(255) PRIMARY KEY, 
name VARCHAR (30) NOT NULL, 
nickname TEXT NOT NULL, 
email VARCHAR(30) NOT NULL 
);

INSERT INTO LISTAUSUARIOS (id, name, nickname, email) 
VALUES( 
"001", 
"Astro Dev", 
"astrodev", 
"astro@dev.com" 
);

SELECT * FROM LISTAUSUARIOS
WHERE ID = id