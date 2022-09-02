USE `Hopper-4314114-natalia-nascimento`;

-- EXERCICIO 4

ALTER TABLE PROJETINHO ADD description VARCHAR(150);

DESCRIBE PROJETINHO;

UPDATE PROJETINHO SET description="Projeto de sistema em nuvem da Labenu." WHERE id = "001";
UPDATE PROJETINHO SET description="Projeto de sistema de gerenciamento de músicas da Labenu." WHERE id = "002";
UPDATE PROJETINHO SET description="Projeto de rede de comunicação da Labenu." WHERE id = "003";
SELECT * FROM PROJETINHO;