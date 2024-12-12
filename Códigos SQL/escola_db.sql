-- Atividade do curso SQLite online: conhecendo as instruções SQL, da Alura
-- Instrutora: Beatriz Magalhães
-----------------------------------------------------------------------------------------------
-- Carlos Vaz Porto
-- Dezembro/2024
-----------------------------------------------------------------------------------------------

-- 1 - Criar tabelas

CREATE TABLE Aluno (
    ID_aluno INT PRIMARY KEY,
    nome_aluno VARCHAR(250),
    nascimento_aluno DATE,
    genero_aluno VARCHAR(50),
    endereco_aluno VARCHAR(250),
    telefone_aluno VARCHAR(20),
    email_aluno VARCHAR(100)
);

CREATE TABLE Professor (
    ID_professor INT PRIMARY KEY,
    nome_professor VARCHAR(250),
    nascimento_professor DATE,
    genero_professor VARCHAR(50),
    telefone_professor VARCHAR(20),
    email_professor VARCHAR(100)
);

CREATE TABLE Disciplina (
    ID_disciplina INT PRIMARY KEY,
    nome_disciplina VARCHAR(250),
    descricao_disciplina TEXT,
    carga_horaria_disciplina INT,
    ID_professor INT,
    FOREIGN KEY (ID_professor) REFERENCES Professores(ID_professor)
);

CREATE TABLE Turma (
    ID_turma INT PRIMARY KEY,
    nome_turma VARCHAR(250),
    ano_letivo INT,
    ID_orientador INT,
    FOREIGN KEY (ID_orientador) REFERENCES Professor(ID_professor)
);

CREATE TABLE Turma_Disciplina (
    ID_turma INT,
    ID_disciplina INT,
    PRIMARY KEY (ID_turma, ID_disciplina),
    FOREIGN KEY (ID_turma) REFERENCES Turma(ID_turma),
    FOREIGN KEY (ID_disciplina) REFERENCES Disciplina(ID_disciplina)
);

CREATE TABLE Turma_Aluno (
    ID_turma INT,
    ID_aluno INT,
    PRIMARY KEY (ID_turma, ID_aluno),
    FOREIGN KEY (ID_turma) REFERENCES Turma(ID_turma),
    FOREIGN KEY (ID_aluno) REFERENCES Aluno(ID_aluno)
);

CREATE TABLE Nota (
    ID_nota INT PRIMARY KEY,
    ID_aluno INT,
    ID_disciplina INT,
    valor_nota DECIMAL(3, 2),
    data_avaliacao DATE,
    FOREIGN KEY (ID_aluno) REFERENCES Aluno(ID_aluno),
    FOREIGN KEY (ID_disciplina) REFERENCES Disciplina(ID_disciplina)
);

-- 2 - Inserir dados

INSERT INTO Aluno (
    ID_aluno,
    nome_aluno,
    nascimento_aluno,
    genero_aluno,
    endereco_aluno,
    telefone_aluno,
    email_aluno)
    VALUES 
    (01, 'João Silva', '2005-03-15', 'Masculino', 'Rua das Flores, 123', '(11) 9876-5432', 'joao@email.com'), 
    (02, 'Maria Santos', '2006-06-20', 'Feminino', 'Avenida Principal, 456', '(11) 8765-4321', 'maria@email.com'), 
    (03, 'Pedro Soares', '2004-01-10', 'Masculino', 'Rua Central, 789', '(11) 7654-3210', 'pedro@email.com'), 
    (04, 'Ana Lima', '2005-04-02', 'Feminino', 'Rua da Escola, 56', '(11) 8765-4321', 'ana@email.com'), 
    (05, 'Mariana Fernandes', '2005-08-12', 'Feminino', 'Avenida da Paz, 789', '(11) 5678-1234', 'mariana@email.com'), 
    (06, 'Lucas Costa', '2003-11-25', 'Masculino', 'Rua Principal, 456', '(11) 1234-5678', 'lucas@email.com'), 
    (07, 'Isabela Santos', '2006-09-10', 'Feminino', 'Rua da Amizade, 789', '(11) 9876-5432', 'isabela@email.com'), 
    (08, 'Gustavo Pereira', '2004-05-15', 'Masculino', 'Avenida dos Sonhos, 123', '(11) 7654-3210', 'gustavo@email.com'), 
    (09, 'Carolina Oliveira', '2005-02-20', 'Feminino', 'Rua da Alegria, 456', '(11) 8765-4321', 'carolina@email.com'), 
    (10, 'Daniel Silva', '2003-10-05', 'Masculino', 'Avenida Central, 789', '(11) 1234-5678', 'daniel@email.com'), 
    (11, 'Larissa Souza', '2004-12-08', 'Feminino', 'Rua da Felicidade, 123', '(11) 9876-5432', 'larissa@email.com'), 
    (12, 'Bruno Costa', '2005-07-30', 'Masculino', 'Avenida Principal, 456', '(11) 7654-3210', 'bruno@email.com'), 
    (13, 'Camila Rodrigues', '2006-03-22', 'Feminino', 'Rua das Estrelas, 789', '(11) 8765-4321', 'camila@email.com'), 
    (14, 'Rafael Fernandes', '2004-11-18', 'Masculino', 'Avenida dos Sonhos, 123', '(11) 1234-5678', 'rafael@email.com'), 
    (15, 'Letícia Oliveira', '2005-01-05', 'Feminino', 'Rua da Alegria, 456', '(11) 9876-5432', 'leticia@email.com'), 
    (16, 'Fernanda Lima', '2004-02-12', 'Feminino', 'Rua da Esperança, 789', '(11) 4567-8901', 'fernanda@email.com'), 
    (17, 'Vinícius Santos', '2003-07-28', 'Masculino', 'Avenida da Amizade, 123', '(11) 8901-2345', 'vinicius@email.com'), 
    (18, 'Juliana Pereira', '2006-09-01', 'Feminino', 'Rua das Rosas, 789', '(11) 3456-7890', 'juliana@email.com');

INSERT INTO Professor (
    ID_professor,
    nome_professor,
    nascimento_professor,
    genero_professor,
    telefone_professor,
    email_professor)
    VALUES 
    (01, 'Ana Oliveira', '1980-05-25', 'Feminino', '(11) 1234-5678', 'ana@email.com'), 
    (02, 'Carlos Ferreira', '1975-09-12', 'Masculino', '(11) 2345-6789', 'carlos@email.com'), 
    (03, 'Mariana Santos', '1982-03-15', 'Feminino', '(11) 3456-7890', 'mariana@email.com'), 
    (04, 'Ricardo Silva', '1978-08-20', 'Masculino', '(11) 7890-1234', 'ricardo@email.com'), 
    (05, 'Fernanda Lima', '1985-01-30', 'Feminino', '(11) 4567-8901', 'fernanda@email.com');

INSERT INTO Disciplina (
    ID_disciplina,
    nome_disciplina,
    descricao_disciplina,
    carga_horaria_disciplina,
    ID_professor) 
    VALUES 
    (01, 'Matemática', 'Estudo de conceitos matemáticos avançados', 60, 01), 
    (02, 'História', 'História mundial e local', 45, 02), 
    (03, 'Física', 'Princípios fundamentais da física', 60, 01), 
    (04, 'Química', 'Estudo da química e suas aplicações', 45, 03), 
    (05, 'Inglês', 'Aulas de inglês para iniciantes', 45, 04), 
    (06, 'Artes', 'Exploração da criatividade artística', 30, 05);

INSERT INTO Turma (
    ID_turma,
    nome_turma,
    ano_letivo,
    ID_orientador) 
    VALUES 
    (01, 'Turma A', 2023, 01), 
    (02, 'Turma B', 2023, 02), 
    (03, 'Turma C', 2023, 03), 
    (04, 'Turma D', 2023, 04), 
    (05, 'Turma E', 2023, 05);

INSERT INTO Turma_Disciplina (
    ID_turma,
    ID_disciplina) 
    VALUES 
    (01, 01), 
    (02, 02), 
    (03, 03), 
    (04, 04), 
    (05, 05), 
    (01, 03), 
    (02, 01), 
    (03, 02);

INSERT INTO Turma_Aluno (
    ID_turma,
    ID_aluno) 
    VALUES 
    (01, 01), 
    (02, 02), 
    (03, 03), 
    (04, 04), 
    (05, 05), 
    (01, 06), 
    (02, 07), 
    (03, 08), 
    (04, 09), 
    (05, 10);

INSERT INTO Nota (
    ID_nota,
    ID_aluno,
    ID_disciplina,
    valor_nota,
    data_avaliacao) 
    VALUES 
    (02, 01, 01, 6.19, '07/07/2023'),
    (03, 01, 02, 7.18, '07/07/2023'),
    (04, 01, 03, 7.47, '07/07/2023'),
    (05, 01, 04, 7.46, '07/07/2023'),
    (06, 01, 05, 4.35, '07/07/2023'),
    (07, 01, 06, 4.43, '07/07/2023'),
    (08, 01, 07, 0.76, '07/07/2023'),
    (09, 01, 08, 9.22, '07/07/2023'),
    (10, 01, 09, 9.04, '07/07/2023'),
    (11, 01, 10, 3.28, '07/07/2023'),
    (12, 02, 01, 1.34, '07/09/2023'),
    (13, 02, 02, 3.10, '07/09/2023'),
    (14, 02, 03, 1.66, '07/09/2023'),
    (15, 02, 04, 0.03, '07/09/2023'),
    (16, 02, 05, 4.34, '07/09/2023'),
    (17, 02, 06, 4.02, '07/09/2023'),
    (18, 02, 07, 8.79, '07/09/2023'),
    (19, 02, 08, 1.17, '07/09/2023'),
    (20, 02, 09, 8.26, '07/09/2023'),
    (21, 02, 10, 3.41, '07/09/2023'),
    (22, 03, 01, 6.82, '07/27/2023'),
    (23, 03, 02, 8.21, '07/27/2023'),
    (24, 03, 03, 1.30, '07/27/2023'),
    (25, 03, 04, 4.01, '07/27/2023'),
    (26, 03, 05, 0.25, '07/27/2023'),
    (27, 03, 06, 6.63, '07/27/2023'),
    (28, 03, 07, 9.74, '07/27/2023'),
    (29, 03, 08, 3.77, '07/27/2023'),
    (30, 03, 09, 0.58, '07/27/2023'),
    (31, 03, 10, 8.52, '07/27/2023'),
    (32, 04, 01, 8.37, '08/08/2023'),
    (33, 04, 02, 0.26, '08/08/2023'),
    (34, 04, 03, 5.95, '08/08/2023'),
    (35, 04, 04, 6.98, '08/08/2023'),
    (36, 04, 05, 6.18, '08/08/2023'),
    (37, 04, 06, 4.79, '08/08/2023'),
    (38, 04, 07, 7.96, '08/08/2023'),
    (39, 04, 08, 0.62, '08/08/2023'),
    (40, 04, 09, 7.77, '08/08/2023'),
    (41, 04, 10, 5.81, '08/08/2023'),
    (42, 05, 01, 2.25, '08/15/2023'),
    (43, 05, 02, 5.82, '08/15/2023'),
    (44, 05, 03, 4.11, '08/15/2023'),
    (45, 05, 04, 7.99, '08/15/2023'),
    (46, 05, 05, 3.23, '08/15/2023'),
    (47, 05, 06, 8.09, '08/15/2023'),
    (48, 05, 07, 8.24, '08/15/2023'),
    (49, 05, 08, 3.33, '08/15/2023'),
    (50, 05, 09, 4.24, '08/15/2023'),
    (51, 05, 10, 0.11, '08/15/2023');

-- 3 - Realizar consultas simples

-- Consulta 1: Executar consultas para verificar se os dados foram importados corretamente em todas as tabelas

SELECT * 
FROM Aluno;

SELECT * 
FROM Professor;

SELECT * 
FROM Disciplina;

SELECT * 
FROM Turma;

SELECT * 
FROM Turma_Disciplina;

SELECT * 
FROM Turma_Aluno;

SELECT * 
FROM Nota;

-- Consulta 2: Retorne as informações de todos os alunos ordenados pelo nome

SELECT *
FROM Aluno
ORDER BY nome_aluno;

-- Consulta 3: Retornar a disciplina que possui a carga horaria maior que 40

SELECT *
FROM Disciplina
WHERE carga_horaria_disciplina > 40;

-- Consulta 4: Buscar as notas que são maiores que 6 e menores que 8

SELECT *
FROM Nota
WHERE valor_nota > 6 AND valor_nota < 8;

