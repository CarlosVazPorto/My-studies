CREATE TABLE tabela_funcionarios2 (
    ID INT PRIMARY KEY,
    Nome VARCHAR(100),
    Departamento VARCHAR(100),
    Salario FLOAT
)

INSERT INTO tabela_funcionarios2 (
    ID,
    Nome,
    Departamento,
    Salario
)
VALUES
  (01, 'Heitor Vieira', 'Financeiro', 4959.22),
  (02, 'Daniel Campos', 'Vendas', 3884.44),
  (03, 'Luiza Dias', 'TI', 8205.78),
  (04, 'Davi Lucas Moraes', 'Financeiro', 8437.02),
  (05, 'Pietro Cavalcanti', 'TI', 4946.88),
  (06, 'Evelyn da Mata', 'Vendas', 5278.88),
  (07, 'Isabella Rocha', 'Marketing', 4006.03),
  (08, 'Sra. Manuela Azevedo', 'Vendas', 6101.88),
  (09, 'Brenda Cardoso','TI', 8853.34),
  (10, 'Danilo Souza', 'TI', 8242.14);

SELECT *
FROM tabela_funcionarios2;

SELECT Nome
FROM tabela_funcionarios2
WHERE Departamento = 'Vendas';

SELECT *
FROM tabela_funcionarios2
WHERE Salario > 5000;

SELECT DISTINCT Departamento
FROM tabela_funcionarios2;

UPDATE tabela_funcionarios2
SET Salario = 7500
WHERE Departamento = 'TI';

DELETE FROM tabela_funcionarios2
WHERE Salario < 4000;

SELECT Nome, Salario
FROM tabela_funcionarios2
WHERE Departamento = 'Vendas' AND Salario >= 6000;

CREATE TABLE projetos (
    id_projeto INT PRIMARY KEY,
    nome_projeto VARCHAR(100),
    id_gerente INT,
    FOREIGN KEY (id_gerente) REFERENCES funcionarios(id)
);

-- DROP TABLE tabela_funcionarios2

