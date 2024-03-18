INSERT INTO auth_user (password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) 
VALUES ('password1', '2024-03-18 12:00:00', 0, 'user1', 'nombre1', 'apellido1', 'usuario@example.com', 0, 1, '2024-03-18 12:00:00');


INSERT INTO stores (name, idUser_id) VALUES ('Nombre de la tienda', 1); 


INSERT INTO categories (name) VALUES
('Footwear'),
('Shirts'),
('T-shirts'),
('Blouses'),
('Pants'),
('Underwear'),
('Caps'),
('Accessories'),
('Coats'),
('Sporty'),
('Swimwear');


INSERT INTO ecologicalCategories (name, description) VALUES
('Orgánica', 'Prendas confeccionadas con materiales naturales cultivados sin químicos, cuidando la salud del planeta y del consumidor.'),
('Reciclable', ' Moda con materiales reutilizados, promoviendo la circularidad y reduciendo residuos. Estilo con conciencia medioambiental'),
('Fibra natural', 'Ropa confeccionada con materiales provenientes de fuentes renovables y biodegradables, promoviendo la sostenibilidad y el confort.'),
('Vegana', 'Colección libre de productos de origen animal, fomentando un estilo de vida ético y respetuoso con los animales.'),
('Biodegradable', 'Moda elaborada con materiales que se descomponen naturalmente, reduciendo el impacto ambiental y promoviendo la sostenibilidad.'),
('Comercio justo', 'Ropa producida bajo condiciones laborales éticas y remuneración equitativa, apoyando la igualdad y el bienestar de los trabajadores.'),
('Certificada', 'Prendas verificadas por estándares de sostenibilidad, garantizando calidad y transparencia en cada producto ofrecido');


INSERT INTO genderCategories (name) VALUES
('Hombre'),
('Mujer'),
('Niños'),
('Niñas'),
('Bebés');

INSERT INTO generalSizes (size) VALUES
('XS'),
('S'),
('M'),
('L'),
('XL'),
('XXL'),
('XXXL');


INSERT INTO shoesSizes (size) VALUES
(38),
(39),
(39.5),
(40),
(40.5),
(41),
(42),
(42.5),
(43),
(43.5),
(44),
(45),
(46),
(47),
(48),
(49),
(50),
(51);


INSERT INTO brasSizes (size) VALUES
('30A'),
('30B'),
('30C'),
('30D'),
('32A'),
('32B'),
('32C'),
('32D'),
('34A'),
('34B'),
('34C'),
('34D'),
('36A'),
('36B'),
('36C'),
('36D'),
('38A'),
('38B'),
('38C'),
('38D');











