CREATE TABLE tabela_pedidos_gold (
  ID_Pedido_Gold INT PRIMARY KEY,
  Data_do_Pedido_Gold DATE,
  Status_Gold VARCHAR(50),
  Total_do_Pedido_Gold DECIMAL(10, 2),
  Cliente_Gold INT,
  Data_de_Envio_Estimada_Gold DATE,
  FOREIGN KEY (Cliente_Gold) REFERENCES tabela_clientes (id_cliente)
  );

INSERT INTO tabela_pedidos_gold
(id_pedido_gold,
 data_do_pedido_gold,
 status_gold,
 total_do_pedido_gold,
 cliente_gold,
 data_de_envio_estimada_gold)
 SELECT
 id,
 data_do_pedido,
 status,
 total_do_pedido,
 cliente,
 data_de_envio_estimada
 FROM tabela_pedidos
 WHERE total_do_pedido >= 400;
 
 SELECT * FROM tabela_pedidos_gold;
 