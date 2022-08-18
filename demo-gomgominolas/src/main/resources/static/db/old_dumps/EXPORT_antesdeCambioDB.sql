CREATE DATABASE  IF NOT EXISTS `gomgom` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `gomgom`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win64 (x86_64)
--
-- Host: localhost    Database: gomgom
-- ------------------------------------------------------
-- Server version	5.6.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id_clientes` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_roles` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id_clientes`),
  KEY `fk_clientes_usuario_idx` (`id_usuario`),
  KEY `fk_clientes_roles_idx` (`id_roles`),
  CONSTRAINT `fk_clientes_roles` FOREIGN KEY (`id_roles`) REFERENCES `roles` (`id_roles`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_clientes_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cotizaciones_eventos`
--

DROP TABLE IF EXISTS `cotizaciones_eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cotizaciones_eventos` (
  `id_cotizacion` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned DEFAULT NULL,
  `fecha` date NOT NULL,
  `evento` varchar(15) NOT NULL,
  `num_personas` int(3) NOT NULL,
  `presupuesto` int(11) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `descripcion` varchar(680) DEFAULT NULL,
  PRIMARY KEY (`id_cotizacion`),
  KEY `fk_cotizaciones_eventos_usuarios_idx` (`id_usuario`),
  CONSTRAINT `fk_cotizaciones_eventos_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleados` (
  `id_empleado` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_roles` int(10) unsigned NOT NULL,
  `rfc` varchar(13) DEFAULT NULL,
  `salario` decimal(10,2) DEFAULT NULL,
  `descuento` int(2) DEFAULT NULL,
  PRIMARY KEY (`id_empleado`),
  KEY `fk_empleados_usuarios_idx` (`id_usuario`),
  KEY `fk_empleados_roles_idx` (`id_roles`),
  CONSTRAINT `fk_empleados_roles` FOREIGN KEY (`id_roles`) REFERENCES `roles` (`id_roles`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_empleados_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `gomitas`
--

DROP TABLE IF EXISTS `gomitas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gomitas` (
  `id_gomitas` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_gomitas`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `has_chamoy`
--

DROP TABLE IF EXISTS `has_chamoy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `has_chamoy` (
  `id_has_chamoy` int(11) NOT NULL AUTO_INCREMENT,
  `has_chamoy` varchar(18) DEFAULT NULL,
  PRIMARY KEY (`id_has_chamoy`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nombre_paquete`
--

DROP TABLE IF EXISTS `nombre_paquete`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nombre_paquete` (
  `id_nombre_paquete` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre_paquete` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_nombre_paquete`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `paquetes`
--

DROP TABLE IF EXISTS `paquetes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paquetes` (
  `id_paquetes` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_nombre_paquete` int(10) unsigned NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_paquetes`),
  KEY `fk_paquetes_nombre_paquete_idx` (`id_nombre_paquete`),
  CONSTRAINT `fk_paquetes_nombre_paquete` FOREIGN KEY (`id_nombre_paquete`) REFERENCES `nombre_paquete` (`id_nombre_paquete`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos` (
  `id_pedidos` int(11) NOT NULL AUTO_INCREMENT,
  `gomitas_id_gomitas` int(11) NOT NULL,
  `paquetes_id_paquetes` int(10) unsigned NOT NULL,
  `fecha` date DEFAULT NULL,
  `venta_total` decimal(10,2) DEFAULT NULL,
  `id_has_chamoy` int(1) DEFAULT NULL,
  PRIMARY KEY (`id_pedidos`,`gomitas_id_gomitas`,`paquetes_id_paquetes`),
  KEY `fk_pedidos_gomitas_idx` (`gomitas_id_gomitas`),
  KEY `fk_pedidos_paquetes_idx` (`paquetes_id_paquetes`),
  KEY `fk_pedidos_has_chamoy_idx` (`id_has_chamoy`),
  CONSTRAINT `fk_pedidos_gomitas` FOREIGN KEY (`gomitas_id_gomitas`) REFERENCES `gomitas` (`id_gomitas`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_has_chamoy` FOREIGN KEY (`id_has_chamoy`) REFERENCES `has_chamoy` (`id_has_chamoy`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_paquetes` FOREIGN KEY (`paquetes_id_paquetes`) REFERENCES `paquetes` (`id_paquetes`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id_roles` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rol` varchar(10) NOT NULL,
  PRIMARY KEY (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `username` varchar(21) DEFAULT NULL,
  `domicilio` varchar(300) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `contraseña` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas` (
  `id_ventas` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_pedidos` int(11) NOT NULL,
  PRIMARY KEY (`id_ventas`),
  KEY `fk_ventas_paquetes_has_gomitas_idx` (`id_pedidos`),
  KEY `fk_ventas_usuarios` (`id_usuario`),
  CONSTRAINT `fk_ventas_paquetes_has_gomitas` FOREIGN KEY (`id_pedidos`) REFERENCES `pedidos` (`id_pedidos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ventas_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-11 21:24:15
