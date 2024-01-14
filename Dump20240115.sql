CREATE DATABASE  IF NOT EXISTS `planner` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `planner`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: planner
-- ------------------------------------------------------
-- Server version	5.6.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `noOfTasks` int(11) DEFAULT NULL,
  `categoryId` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `userId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`categoryId`),
  KEY `FKd8qa9h1d87er2fqtaaetj1vmx` (`userId`),
  CONSTRAINT `FKd8qa9h1d87er2fqtaaetj1vmx` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (NULL,0,'Work Project',1),(NULL,1,'Work',1),(NULL,2,'Self-Care',1),(NULL,3,'Fun',1);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_seq`
--

DROP TABLE IF EXISTS `categories_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_seq`
--

LOCK TABLES `categories_seq` WRITE;
/*!40000 ALTER TABLE `categories_seq` DISABLE KEYS */;
INSERT INTO `categories_seq` VALUES (1);
/*!40000 ALTER TABLE `categories_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_task`
--

DROP TABLE IF EXISTS `categories_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_task` (
  `Categories_categoryId` bigint(20) NOT NULL,
  `tasks_taskId` bigint(20) NOT NULL,
  UNIQUE KEY `UK_huyfgup8basqif7u5ulffcxs2` (`tasks_taskId`),
  KEY `FKicdqbyagbxx8hev95jbgq5wq3` (`Categories_categoryId`),
  CONSTRAINT `FKicdqbyagbxx8hev95jbgq5wq3` FOREIGN KEY (`Categories_categoryId`) REFERENCES `categories` (`categoryId`),
  CONSTRAINT `FKqqexq7t6erjgrigqi94pfa75h` FOREIGN KEY (`tasks_taskId`) REFERENCES `task` (`taskId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_task`
--

LOCK TABLES `categories_task` WRITE;
/*!40000 ALTER TABLE `categories_task` DISABLE KEYS */;
INSERT INTO `categories_task` VALUES (0,0);
/*!40000 ALTER TABLE `categories_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `journal`
--

DROP TABLE IF EXISTS `journal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `journal` (
  `dataZiua` datetime(6) DEFAULT NULL,
  `journalId` bigint(20) NOT NULL,
  `notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`journalId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `journal`
--

LOCK TABLES `journal` WRITE;
/*!40000 ALTER TABLE `journal` DISABLE KEYS */;
/*!40000 ALTER TABLE `journal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `journal_seq`
--

DROP TABLE IF EXISTS `journal_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `journal_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `journal_seq`
--

LOCK TABLES `journal_seq` WRITE;
/*!40000 ALTER TABLE `journal_seq` DISABLE KEYS */;
INSERT INTO `journal_seq` VALUES (1);
/*!40000 ALTER TABLE `journal_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reminder`
--

DROP TABLE IF EXISTS `reminder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reminder` (
  `reminderId` bigint(20) NOT NULL,
  `startDate` datetime(6) DEFAULT NULL,
  `taskId` bigint(20) DEFAULT NULL,
  `descriereMemento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`reminderId`),
  KEY `FK6pxq5q73i0p4q5vn7nfb3ej6i` (`taskId`),
  CONSTRAINT `FK6pxq5q73i0p4q5vn7nfb3ej6i` FOREIGN KEY (`taskId`) REFERENCES `task` (`taskId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reminder`
--

LOCK TABLES `reminder` WRITE;
/*!40000 ALTER TABLE `reminder` DISABLE KEYS */;
/*!40000 ALTER TABLE `reminder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reminder_seq`
--

DROP TABLE IF EXISTS `reminder_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reminder_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reminder_seq`
--

LOCK TABLES `reminder_seq` WRITE;
/*!40000 ALTER TABLE `reminder_seq` DISABLE KEYS */;
INSERT INTO `reminder_seq` VALUES (1);
/*!40000 ALTER TABLE `reminder_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `priority` int(11) DEFAULT NULL,
  `categoryId` bigint(20) DEFAULT NULL,
  `endDate` datetime(6) DEFAULT NULL,
  `startDate` datetime(6) DEFAULT NULL,
  `taskId` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`taskId`),
  KEY `FKebx599r1v9nqa1yagd5nilw65` (`categoryId`),
  CONSTRAINT `FKebx599r1v9nqa1yagd5nilw65` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`categoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (1,0,'2022-02-15 15:00:00.000000','2022-02-15 10:00:00.000000',0,'Create a detailed project proposal for upcoming project.','Pending','Complete Project Proposal'),(2,0,'2022-02-16 16:00:00.000000','2022-02-16 14:30:00.000000',1,'Discuss project requirements and expectations with the client.','Scheduled','Meeting with Client');
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_reminder`
--

DROP TABLE IF EXISTS `task_reminder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_reminder` (
  `Task_taskId` bigint(20) NOT NULL,
  `reminders_reminderId` bigint(20) NOT NULL,
  UNIQUE KEY `UK_qk9b42v9gxhre97vxdcbwm4jc` (`reminders_reminderId`),
  KEY `FKk0mf39krbopqhlcvkpss4g9xo` (`Task_taskId`),
  CONSTRAINT `FKk0mf39krbopqhlcvkpss4g9xo` FOREIGN KEY (`Task_taskId`) REFERENCES `task` (`taskId`),
  CONSTRAINT `FKqh0o2f81djbeq237octe3981s` FOREIGN KEY (`reminders_reminderId`) REFERENCES `reminder` (`reminderId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_reminder`
--

LOCK TABLES `task_reminder` WRITE;
/*!40000 ALTER TABLE `task_reminder` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_reminder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_seq`
--

DROP TABLE IF EXISTS `task_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_seq`
--

LOCK TABLES `task_seq` WRITE;
/*!40000 ALTER TABLE `task_seq` DISABLE KEYS */;
INSERT INTO `task_seq` VALUES (1);
/*!40000 ALTER TABLE `task_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'mikichiki@gmail.com','miki','aripioare123','mikki'),(102,'baubau@gmail.com',NULL,'miau','miaubau'),(252,'valietare',NULL,'bla','yes');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_categories`
--

DROP TABLE IF EXISTS `user_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_categories` (
  `User_id` bigint(20) NOT NULL,
  `categories_categoryId` bigint(20) NOT NULL,
  UNIQUE KEY `UK_ffg89dqp8e2i63yuwr0bacg12` (`categories_categoryId`),
  KEY `FKjwuaei8215gooevy3kl9pc5l` (`User_id`),
  CONSTRAINT `FKjwelgw3x0n905tu350e8687oy` FOREIGN KEY (`categories_categoryId`) REFERENCES `categories` (`categoryId`),
  CONSTRAINT `FKjwuaei8215gooevy3kl9pc5l` FOREIGN KEY (`User_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_categories`
--

LOCK TABLES `user_categories` WRITE;
/*!40000 ALTER TABLE `user_categories` DISABLE KEYS */;
INSERT INTO `user_categories` VALUES (1,0);
/*!40000 ALTER TABLE `user_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_journal`
--

DROP TABLE IF EXISTS `user_journal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_journal` (
  `User_id` bigint(20) NOT NULL,
  `journals_journalId` bigint(20) NOT NULL,
  UNIQUE KEY `UK_4ilvvxgnd9l8rg09o24jwfadx` (`journals_journalId`),
  KEY `FK80vs4vmknh66l7yomtopv0rvp` (`User_id`),
  CONSTRAINT `FK80vs4vmknh66l7yomtopv0rvp` FOREIGN KEY (`User_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKfa9r814caetxu4eqt8p3nie3b` FOREIGN KEY (`journals_journalId`) REFERENCES `journal` (`journalId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_journal`
--

LOCK TABLES `user_journal` WRITE;
/*!40000 ALTER TABLE `user_journal` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_journal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_reminder`
--

DROP TABLE IF EXISTS `user_reminder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_reminder` (
  `User_id` bigint(20) NOT NULL,
  `reminders_reminderId` bigint(20) NOT NULL,
  UNIQUE KEY `UK_1bsinf7rvk8wmowi6kq58jyyv` (`reminders_reminderId`),
  KEY `FK2ibligf2cwg7an7j6iua9w42j` (`User_id`),
  CONSTRAINT `FK2ibligf2cwg7an7j6iua9w42j` FOREIGN KEY (`User_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKrinajs9kuk9x4r4w1xvr5iudu` FOREIGN KEY (`reminders_reminderId`) REFERENCES `reminder` (`reminderId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_reminder`
--

LOCK TABLES `user_reminder` WRITE;
/*!40000 ALTER TABLE `user_reminder` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_reminder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_seq`
--

DROP TABLE IF EXISTS `user_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_seq`
--

LOCK TABLES `user_seq` WRITE;
/*!40000 ALTER TABLE `user_seq` DISABLE KEYS */;
INSERT INTO `user_seq` VALUES (351);
/*!40000 ALTER TABLE `user_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'planner'
--

--
-- Dumping routines for database 'planner'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-15  1:05:24
