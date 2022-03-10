CREATE TABLE Turmas(
id_turma int AUTO_INCREMENT,
nome_turma varchar(15) NOT NULL,
curso varchar(20) NOT NULL,
data_inicio date,
primary key (id_turma)
);

CREATE TABLE Alunos(
id_aluno int AUTO_INCREMENT,
id_turma int,
nome_aluno varchar(50),
data_matricula date,
primary key (id_aluno),
FOREIGN KEY ( `id_turma` ) REFERENCES `Turmas` ( `id_turma`));