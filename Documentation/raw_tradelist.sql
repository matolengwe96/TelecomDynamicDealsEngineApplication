-- --------------------------------------------------------
-- Host:                         prd-dde.cluster-czz7nbdwrez3.af-south-1.rds.amazonaws.com
-- Server version:               8.0.39 - 8bc99e28
-- Server OS:                    Linux
-- HeidiSQL Version:             12.14.0.7165
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table DDE-prd.raw_tradelist
CREATE TABLE IF NOT EXISTS `raw_tradelist` (
  `oem` varchar(20) DEFAULT NULL,
  `description` varchar(80) DEFAULT NULL,
  `model_name` varchar(50) DEFAULT NULL,
  `colour` varchar(50) DEFAULT NULL,
  `month0` tinyint DEFAULT NULL,
  `month1` tinyint DEFAULT NULL,
  `month2` tinyint DEFAULT NULL,
  `month3` tinyint DEFAULT NULL,
  `month4` tinyint DEFAULT NULL,
  `month5` tinyint DEFAULT NULL,
  `dealcycle` date DEFAULT NULL,
  `week_landing` varchar(10) DEFAULT NULL,
  `date_eol` date DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `cid` int DEFAULT NULL,
  `product_code` varchar(20) DEFAULT NULL,
  `barcode` varchar(20) DEFAULT NULL,
  `trade_ex` decimal(10,2) DEFAULT NULL,
  `lowest_cost_check` tinyint(1) DEFAULT NULL,
  `retail_margin` decimal(10,3) DEFAULT NULL,
  `retail_prepaid_lowest_cost_ex_vat` decimal(10,2) DEFAULT NULL,
  `retail_rrp_incl_vat` decimal(10,2) DEFAULT NULL,
  `fd_margin` decimal(10,3) DEFAULT NULL,
  `fd_rrp_incl_vat` decimal(10,2) DEFAULT NULL,
  `fd_claimback` decimal(10,2) DEFAULT NULL,
  `ss` char(1) DEFAULT NULL,
  `ds` char(1) DEFAULT NULL,
  `nl` char(1) DEFAULT NULL,
  `esim` char(1) DEFAULT NULL,
  `os` varchar(20) DEFAULT NULL,
  `net_tech` varchar(20) DEFAULT NULL,
  `net_embed` varchar(20) DEFAULT NULL,
  `bands` varchar(50) DEFAULT NULL,
  `display_size` varchar(20) DEFAULT NULL,
  `display_res` varchar(20) DEFAULT NULL,
  `camera_main` varchar(20) DEFAULT NULL,
  `camera_front` varchar(20) DEFAULT NULL,
  `ram` varchar(20) DEFAULT NULL,
  `rom` varchar(20) DEFAULT NULL,
  `micro_sd` varchar(20) DEFAULT NULL,
  `chip` varchar(20) DEFAULT NULL,
  `cpu` varchar(20) DEFAULT NULL,
  `bt_version` varchar(20) DEFAULT NULL,
  `battery` varchar(20) DEFAULT NULL,
  `volte` char(1) DEFAULT NULL,
  `vowifi` char(1) DEFAULT NULL,
  `charger` char(1) DEFAULT NULL,
  `cable` char(1) DEFAULT NULL,
  `earphone` char(1) DEFAULT NULL,
  `cycle_id` int DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `supplier` varchar(255) DEFAULT 'TRADE'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
