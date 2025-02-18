// proyecto utilizando node.js
#### node.js
#### npm init
#### npm instal express
#### npm install --save-dev nodemon
#### npm install pug
#### npm install sequelize mysql2 // tener instaldo node.js
#### sequelize.org
#### npm i dotenv // variables de entorno
#### base de datos migrada gratis con filess.io

####puedes crear la tabla local 
use AgenciaDeViajes;

CREATE TABLE IF NOT EXISTS testimoniales ( 
id INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(50) NOT NULL, 
correo VARCHAR(50) NOT NULL, 
mensaje VARCHAR(100) NOT NULL );

CREATE TABLE viajes ( 
id BIGINT AUTO_INCREMENT PRIMARY KEY, 
título VARCHAR(100) NOT NULL, -- Nombre del destino 
descripción TEXT NOT NULL, -- Descripción del viaje 
precio DECIMAL(10,2) NOT NULL, -- Precio en formato decimal 
fecha_ida DATE NOT NULL, -- Fecha de ida 
fecha_vuelta DATE NOT NULL, -- Fecha de vuelta 
imagen_url VARCHAR(255) NOT NULL, -- URL de la imagen (mejor que VARBINARY) 
disponible INT NOT NULL, -- Número de plazas disponibles 
slug VARCHAR(100) NOT NULL UNIQUE -- Identificador único en URL );