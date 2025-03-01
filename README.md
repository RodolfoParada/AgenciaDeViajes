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
#### puedes crear la tabla local 

#### npm install helmet para render

**use apunta a la base datos**
```
use AgenciaDeViajes;
```
**Crea Tabla Testimoniales**
```
CREATE TABLE IF NOT EXISTS testimoniales ( 
id INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(50) NOT NULL, 
correo VARCHAR(50) NOT NULL, 
mensaje VARCHAR(100) NOT NULL );
```
**Crea Tabla Viajes**
```
CREATE TABLE viajes ( 
id BIGINT AUTO_INCREMENT PRIMARY KEY, 
titulo VARCHAR(100) NOT NULL, -- Nombre del destino 
descripcion TEXT NOT NULL, -- Descripción del viaje 
precio DECIMAL(10,2) NOT NULL, -- Precio en formato decimal 
fecha_ida DATE NOT NULL, -- Fecha de ida 
fecha_vuelta DATE NOT NULL, -- Fecha de vuelta 
imagen_url VARCHAR(255) NOT NULL, -- URL de la imagen (mejor que VARBINARY) 
disponible INT NOT NULL, -- Número de plazas disponibles 
slug VARCHAR(100) NOT NULL UNIQUE -- Identificador único en URL );
```
**Inserta datos a la tabla viajes**
```
INSERT INTO `viajes`(titulo, descripcion, precio, fecha_ida, fecha_vuelta, imagen_url, disponibles, slug) 
VALUES 
('Italia','sdfafasdf fasdfdfdfasdj jij', 5000,'2021-06-24', '2021-06-30','roma',32,'viaje-italia'),
('Canada','bdfaj asdfasd fwefwefetjjaw', 6000,'2021-07-19', '2021-07-19','canada',25,'viaje-canada'),
('Grecia','tewwetwerñwrñerwooweweruure', 4000,'2021-08-29', '2021-09-15','grecia',18,'viaje-grecia'),
('Inglaterra','qweqwepqwplpk qweqweppq', 8000,'2021-09-22', '2021-10-03','londres',22,'viaje-inglaterra' ),
('Rio de Janeiro','ggggqapñasdsadsaosd', 5000,'2021-04-16', '2021-04-25','rio',23,'viaje-rio-de-janeiro' ),
('Francia','zsddqdqwdwr nqwerqwer erqw', 7500,'2021-04-03', '2021-04-10','paris',14,'viaje-paris' );
```
