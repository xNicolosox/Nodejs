/**
mysql -h localhost -u root -p
password:*******
welcome to the mysql

SHOW DATABASES- mostrar bancos de dados.
USE- selecioar banco de dados.
SHOW TABLES - mostrar tabelas.
CREATE DATABASE- criar banco de dados.
CREATE TABLE- criar tabela.
DESCRIBE tabela- mostrar oq tem na tabela .
INSERT INTO tabela(info1, info2, info3...) VALUES()- inserir dados na tabela.
UPDATE usuarios SET idade = 7 WHERE idade = 8;
**/


/**
CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);
**/

INSERT INTO usuarios(nome, email, idade) VALUES(
  "Nicolas Veloso",
  "niconico@este.com",
  18
);

SELECT * FROM usuarios WHERE idade<15;

DELETE FROM usuarios  WHERE nome = Nicolas Veloso