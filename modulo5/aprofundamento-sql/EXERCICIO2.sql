USE `Hopper-4314114-natalia-nascimento`;

-- EXERCICIO 2
CREATE TABLE PROJETINHO(
	id VARCHAR(4) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO PROJETINHO (
	id, nome, titulo, data
) VALUES (
	'001',
    'LabeSky',
    'LSy',
    '2023/10/05'
), (
	'002',
    'Labefy',
    'LFy',
    '2024/01/06'
), (
	'003',
    'AstroZoom',
    'AZm',
    '2022/12/20'
);