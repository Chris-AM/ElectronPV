CREATE DATABASE ng_electron_db;
USE ng_electron_db;
CREATE TABLE producto (
    codigo_barras VARCHAR(50) NOT NULL PRIMARY KEY,
    nombre_producto VARCHAR(50) NOT NULL,
    granel VARCHAR(2) NOT NULL,
    precio INT,
    precio_kilo INT,
    precio_neto INT NOT NULL,
    stock INT NOT NULL,
    ventas_totales INT NOT NULL
);
CREATE TABLE venta (
    idventa INT auto_increment NOT NULL PRIMARY KEY,
    fk_producto_vendido VARCHAR(50) NOT NULL,
    fk_folio_boleta INT NOT NULL,
    fecha_hora_venta TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    detalle_venta VARCHAR(50) NOT NULL,
    medio_de_pago VARCHAR(50) NOT NULL,
    venta_total VARCHAR(50) NOT NULL,
    firma_sii VARCHAR(50) NOT NULL,
    venta_neta INT NOT NULL,
    cantidad_productos INT NOT NULL,
    CONSTRAINT FOREIGN KEY(fk_producto_vendido) REFERENCES producto(codigo_barras)
);
CREATE TABLE boleta (
    numero_folio INT auto_increment NOT NULL PRIMARY KEY,
    fk_rut_negocio INT NOT NULL,
    razon_social VARCHAR(50) NOT NULL,
    fecha_hora_venta TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    detalle_venta VARCHAR(50) NOT NULL,
    medio_de_pago VARCHAR(50) NOT NULL,
    venta_total VARCHAR(50) NOT NULL,
    firma_sii VARCHAR(50) NOT NULL,
    venta_neta INT NOT NULL,
    cantidad_productos INT NOT NULL
);
CREATE TABLE negocio (
    rut INT NOT NULL PRIMARY KEY,
    razon_social VARCHAR(50) NOT NULL,
    representante_legal VARCHAR(50) NOT NULL
);
CREATE TABLE cierre (
    dia_cierre TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fk_ventas_del_dia INT NOT NULL,
    total_ventas INT NOT NULL,
    cantidad_debito INT NOT NULL,
    cantidad_credito INT NOT NULL,
    cantidad_efectivo INT NOT NULL,
    producto_mas_vendido VARCHAR(50),
    CONSTRAINT FOREIGN KEY (fk_ventas_del_dia) REFERENCES venta (idventa)
);
CREATE TABLE cliente (
    rut_cliente INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    telefono INT NOT NULL,
    tiene_cuenta VARCHAR (2) NOT NULL,
    numero_cuenta INT auto_increment,
    tipo_cuenta VARCHAR(10),
    abono INT,
    nuevo_abono INT,
    deuda INT
);
ALTER TABLE venta
ADD FOREIGN KEY(fk_folio_boleta) REFERENCES boleta (numero_folio);
ALTER TABLE boleta
ADD FOREIGN KEY(fk_rut_negocio) REFERENCES negocio (rut);
ALTER TABLE venta
ADD COLUMN fk_rut_cliente INT NOT NULL;
ALTER TABLE venta
ADD FOREIGN KEY (fk_rut_cliente) REFERENCES cliente (rut_cliente);