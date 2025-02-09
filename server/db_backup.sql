-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: my_database
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updateAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'pat','321341','2025-01-16 15:00:21.344','2025-01-16 15:00:21.344',NULL,'user'),(2,'pat3213','321341','2025-01-16 15:05:45.111','2025-01-16 15:05:45.111',NULL,'user'),(3,'under dog','321341','2025-01-16 19:00:16.956','2025-01-16 19:00:16.956',NULL,'user'),(4,'patchraponkimmy@email.com','321341','2025-01-26 18:17:41.662','2025-01-26 18:17:41.662','Kim','user'),(5,'user@example.com','P@ssw0rd','2025-01-28 07:54:27.030','2025-01-28 07:54:27.030','John Doe','user'),(6,'kim@email.com','321341','2025-02-09 13:56:48.155','2025-02-09 13:56:48.155','Flank','user'),(8,'joedon@email.com','321341','2025-02-09 14:16:01.613','2025-02-09 14:16:01.613','Gaia','admin');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('08002681-d635-4551-b4bc-c82a16cad680','1a76df234402cff660c791a8048a94c53839dcd22ecc792fd4319309e6a339ea','2025-01-17 18:50:01.189','20250117185001_',NULL,NULL,'2025-01-17 18:50:01.138',1),('1ba6038f-bc0f-4b7d-970c-7f3f66dda734','5894490d33986828d2d25955b0635aa9fbbe357681c74b5f5e6d7971116f44cd','2025-02-09 13:42:07.153','20250209132941_add_role',NULL,NULL,'2025-02-09 13:42:07.114',1),('49ede5d9-ffe8-4aef-98f4-22ad3c1a9687','70262f962517b5797a8154d6685cb53a0c0c2037b053d291e385b899597fadbe','2025-01-16 14:22:48.897','20250116105309_',NULL,NULL,'2025-01-16 14:22:48.826',1),('9a9019ea-de27-4049-89cf-4a4cbcd53a08','2af66366cb7e4d0fffc9ef68794f8646fec2e2757ceac744cb3684f8d48efe6f','2025-01-16 14:22:49.036','20250116105736_',NULL,NULL,'2025-01-16 14:22:48.912',1),('b089800a-4ce1-4115-a99b-f44562ed0c6e','5c1b1ce78f75f81b6877a46bcacce6d8b1201c5eac9d0ce25234dcbbbeae13c4','2025-01-26 15:25:25.656','20250126152525_drop_product',NULL,NULL,'2025-01-26 15:25:25.338',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `student_id` char(8) NOT NULL,
  `full_name` varchar(20) DEFAULT NULL,
  `major_id` int DEFAULT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('63010001','สมชาย ใจดี',1),('63010002','สมหญิง สวยงาม',2),('63010003','จันทรา แสงจันทร์',3),('63010004','บัญชา เงินทอง',4),('63010005','อรุณี ใสสะอาด',1),('63010006','ธนวัฒน์ ใจกล้า',2),('63010007','สุทธิชัย เก่งรอบด้าน',3),('63010008','กนกวรรณ สุขใจ',4),('63010009','วีรศักดิ์ กล้าหาญ',1),('63010010','นันทนา ใจเย็น',2),('63010011','ชลธาร สดชื่น',3),('63010012','อภิชาติ เก่งจริง',4),('63010013','พรรณราย งามเลิศ',1),('63010014','ธีรพล ใจเด็ด',2),('63010015','สิริมา สุขสันต์',3),('63010016','วรากร เก่งรอบตัว',4),('63010017','กาญจนา ใจกว้าง',1),('63010018','ธนกฤต เก่งรอบด้าน',2),('63010019','สุชาดา ใจดี',3),('63010020','อานนท์ เก่งจริง',4);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-09 16:53:16
