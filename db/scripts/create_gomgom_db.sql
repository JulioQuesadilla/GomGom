-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gomgom
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gomgom
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gomgom` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `gomgom` ;

-- -----------------------------------------------------
-- Table `gomgom`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`usuarios` (
  `id_usuario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `apellido` VARCHAR(50) NULL,
  `username` VARCHAR(21) NULL,
  `domicilio` VARCHAR(300) NULL,
  `correo` VARCHAR(45) NULL,
  `contraseña` VARCHAR(200) NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gomgom`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`roles` (
  `id_roles` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(10) NULL,
  PRIMARY KEY (`id_roles`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gomgom`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`clientes` (
  `id_clientes` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_usuario` INT UNSIGNED NOT NULL,
  `id_roles` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_clientes`),
  INDEX `fk_clientes_usuario_idx` (`id_usuario` ASC),
  INDEX `fk_clientes_roles_idx` (`id_roles` ASC),
  CONSTRAINT `fk_clientes_usuarios`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `gomgom`.`usuarios` (`id_usuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_clientes_roles`
    FOREIGN KEY (`id_roles`)
    REFERENCES `gomgom`.`roles` (`id_roles`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gomgom`.`gomitas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`gomitas` (
  `id_gomitas` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `imagen` VARCHAR(200) NULL,
  PRIMARY KEY (`id_gomitas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gomgom`.`cotizaciones_eventos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`cotizaciones_eventos` (
  `id_cotizacion` INT NULL AUTO_INCREMENT,
  `id_usuario` INT UNSIGNED NULL,
  `fecha` DATE NOT NULL,
  `evento` VARCHAR(15) NOT NULL,
  `num_personas` INT(3) NOT NULL,
  `presupuesto` INT NOT NULL,
  `telefono` VARCHAR(15) NULL,
  `descripcion` VARCHAR(680) NULL,
  PRIMARY KEY (`id_cotizacion`),
  INDEX `fk_cotizaciones_eventos_usuarios_idx` (`id_usuario` ASC),
  CONSTRAINT `fk_cotizaciones_eventos_usuarios`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `gomgom`.`usuarios` (`id_usuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gomgom`.`empleados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`empleados` (
  `id_empleado` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_usuario` INT UNSIGNED NOT NULL,
  `id_roles` INT UNSIGNED NOT NULL,
  `rfc` VARCHAR(13) NULL,
  `salario` DECIMAL(10,2) NULL,
  `descuento` INT(2) NULL,
  PRIMARY KEY (`id_empleado`),
  INDEX `fk_empleados_usuarios_idx` (`id_usuario` ASC),
  INDEX `fk_empleados_roles_idx` (`id_roles` ASC),
  CONSTRAINT `fk_empleados_usuarios`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `gomgom`.`usuarios` (`id_usuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_empleados_roles`
    FOREIGN KEY (`id_roles`)
    REFERENCES `gomgom`.`roles` (`id_roles`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gomgom`.`nombre_paquete`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`nombre_paquete` (
  `id_nombre_paquete` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre_paquete` VARCHAR(45) NULL,
  PRIMARY KEY (`id_nombre_paquete`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gomgom`.`paquetes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`paquetes` (
  `id_paquetes` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_nombre_paquete` INT UNSIGNED NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id_paquetes`),
  INDEX `fk_paquetes_nombre_paquete_idx` (`id_nombre_paquete` ASC),
  CONSTRAINT `fk_paquetes_nombre_paquete`
    FOREIGN KEY (`id_nombre_paquete`)
    REFERENCES `gomgom`.`nombre_paquete` (`id_nombre_paquete`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gomgom`.`has_chamoy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`has_chamoy` (
  `id_has_chamoy` INT NOT NULL AUTO_INCREMENT,
  `has_chamoy` VARCHAR(18) NULL,
  PRIMARY KEY (`id_has_chamoy`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gomgom`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`pedidos` (
  `id_pedidos` INT NOT NULL AUTO_INCREMENT,
  `numero_pedido` INT NOT NULL,
  `gomitas_id_gomitas` INT NOT NULL,
  `paquetes_id_paquetes` INT UNSIGNED NOT NULL,
  `fecha` DATE NULL,
  `venta_total` DECIMAL(10,2) NULL,
  `id_has_chamoy` INT(1) NULL,
  PRIMARY KEY (`id_pedidos`, `numero_pedido`, `gomitas_id_gomitas`, `paquetes_id_paquetes`),
  INDEX `fk_pedidos_gomitas_idx` (`gomitas_id_gomitas` ASC),
  INDEX `fk_pedidos_paquetes_idx` (`paquetes_id_paquetes` ASC),
  INDEX `fk_pedidos_has_chamoy_idx` (`id_has_chamoy` ASC),
  CONSTRAINT `fk_pedidos_paquetes`
    FOREIGN KEY (`paquetes_id_paquetes`)
    REFERENCES `gomgom`.`paquetes` (`id_paquetes`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_pedidos_gomitas`
    FOREIGN KEY (`gomitas_id_gomitas`)
    REFERENCES `gomgom`.`gomitas` (`id_gomitas`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_pedidos_has_chamoy`
    FOREIGN KEY (`id_has_chamoy`)
    REFERENCES `gomgom`.`has_chamoy` (`id_has_chamoy`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gomgom`.`ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gomgom`.`ventas` (
  `id_ventas` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT UNSIGNED NOT NULL,
  `id_pedidos` INT NOT NULL,
  PRIMARY KEY (`id_ventas`),
  INDEX `fk_ventas_pedidos_idx` (`id_pedidos` ASC),
  CONSTRAINT `fk_ventas_usuarios`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `gomgom`.`usuarios` (`id_usuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ventas_pedidos`
    FOREIGN KEY (`id_pedidos`)
    REFERENCES `gomgom`.`pedidos` (`id_pedidos`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
