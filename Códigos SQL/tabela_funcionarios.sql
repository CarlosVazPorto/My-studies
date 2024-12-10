CREATE TABLE tabela_funcionarios (
  ID INT PRIMARY KEY,
  Nome VARCHAR(250),
  Cargo VARCHAR(100),
  Departamento VARCHAR(100),
  Data_de_contratacao DATE,
  Salario DECIMAL (10, 2)
  );
  
INSERT INTO tabela_funcionarios (
  ID,
  nome,
  cargo,
  departamento,
  data_de_contratacao,
  salario)
  VALUES
  ('32D', 'João Silva', 'Desenvolvedor de Software', 'TI', '2023-10-24', 6000.00);
  
 SELECT * FROM funcionarios;