-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2019 at 06:36 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gromo`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_master`
--

CREATE TABLE IF NOT EXISTS `category_master` (
`cat_id` int(11) NOT NULL,
  `cat_name` varchar(255) NOT NULL,
  `cat_created_at` datetime NOT NULL,
  `cat_updated_at` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_master`
--

INSERT INTO `category_master` (`cat_id`, `cat_name`, `cat_created_at`, `cat_updated_at`) VALUES
(1, 'men', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'women', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'electronics', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `product_master`
--

CREATE TABLE IF NOT EXISTS `product_master` (
`pro_id` int(11) NOT NULL,
  `pro_cat_id` int(11) NOT NULL,
  `pro_name` varchar(255) NOT NULL,
  `pro_description` text NOT NULL,
  `pro_price` float NOT NULL,
  `pro_qty` int(11) NOT NULL,
  `pro_photo` text NOT NULL,
  `pro_shipping` int(11) NOT NULL DEFAULT '0' COMMENT '0-pending,1-done'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_master`
--

INSERT INTO `product_master` (`pro_id`, `pro_cat_id`, `pro_name`, `pro_description`, `pro_price`, `pro_qty`, `pro_photo`, `pro_shipping`) VALUES
(1, 0, 'vishal', '', 1500, 0, '1563965142785counters-bg.jpg', 0),
(2, 0, 'vishal', '', 1500, 0, '1563965202000backiee-19728-landscape.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE IF NOT EXISTS `user_master` (
`id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `email` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `password` text,
  `name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '0-inactive,1-active',
  `log_status` tinyint(4) NOT NULL DEFAULT '0',
  `user_token` text,
  `user_ip` varchar(64) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`id`, `role_id`, `email`, `password`, `name`, `firstname`, `lastname`, `username`, `mobile`, `status`, `log_status`, `user_token`, `user_ip`, `date_created`, `date_updated`) VALUES
(12, 3, 'SHAkEEL', '1efa6eb23b8179f35f1920fcf47ca2b9', 'Sakeel', '', '', '', '8879766905', 1, 0, '2RPXfznipMDTLUhGbWqtCrkwIv6VFaoc', '114.143.247.202', '2018-12-03 19:45:15', '2019-01-09 20:14:34'),
(13, 3, 'LAKHAN', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', '', '', 1, 0, 'ZvgecIAPrFKfdUN1Co6329mYSuaxnMjV', '', '2018-12-03 19:45:58', '2018-12-27 14:12:41'),
(14, 3, 'AKBAR ', '21232f297a57a5a743894a0e4a801fc3', 'ALI', '', '', '', '7710838155', 1, 0, 'MrysGwzRIV7KJ4eXSl5CN3kOnHZ2F8cm', '', '2018-12-03 19:47:35', '2018-12-04 13:11:00'),
(15, 3, 'SHAMLAL', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', '', '9792639342', 1, 0, '0Z3iQSU5YKrA47vzcBFXPuW9Gt2jMdls', '', '2018-12-03 19:50:30', '2018-12-03 14:20:30'),
(17, 3, 'ISMAIL', 'd41d8cd98f00b204e9800998ecf8427e', 'Shaikh', '', '', '', '6202427377', 1, 0, 'Sf2F10wquA3mcE8HrORkxBMGjdPCKQWV', '', '2018-12-03 19:53:08', '2018-12-03 14:23:08'),
(18, 3, 'SAIBUR', 'd41d8cd98f00b204e9800998ecf8427e', 'AHMED', '', '', '', '', 1, 0, 'ANuFPcpE4zmyVT3eKtrsZQ2RvXx08liM', '', '2018-12-03 19:54:16', '2018-12-03 14:24:16'),
(22, 2, 'SHOEB ', 'f33ba15effa5c10e873bf3842afb46a6', 'MOHAMMED SHOEB', '', '', '', '7303356088', 1, 1, 'CZ3eIGgjLywVsoOqBfbMW4Ez70XP2vru', '49.33.244.212', '2018-12-27 19:30:12', '2019-03-26 10:57:28'),
(23, 1, 'HASSAN', 'f6afab40cc0f0e88fe3cb0de903ce4a4', 'HASSAN MISTRY', '', '', '', '9930022944', 1, 0, 'hmyeODL7KwcNFA6aqWMzPBXfng5YbJ2V', '103.120.92.183', '2018-12-27 19:31:09', '2019-04-08 10:24:10'),
(25, 2, 'addyy wizzzz', '8129051ed637b492eb273b7fe6851dc5', 'ABDUL AHAD', '', '', '', '', 1, 0, 'SAI18VvEQcCKkauw6d5YzoqinFPT7UM9', '103.120.92.183', '2018-12-27 19:40:56', '2019-02-28 18:41:35'),
(26, 3, 'HASAN CHOTU', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', '', '', 1, 0, 'uAYBWSr9U4LCj5hJI3w8xcqiFyXG6l71', '', '2018-12-27 19:41:57', '2018-12-27 14:11:57'),
(27, 3, 'SURYA', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', '', '', 1, 0, '0QZD8FUhxJuNHwjV42WSrliL9vpRbXYz', '', '2018-12-27 19:42:17', '2018-12-27 14:12:17'),
(28, 3, 'TASLEEM DRIVER ', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', '', '8825086156', 1, 0, 'tkHunNegVBsU6a8RZC3WmQoX15SEKqpf', '', '2018-12-30 16:30:49', '2018-12-30 18:10:04'),
(29, 3, 'AHMED', 'd41d8cd98f00b204e9800998ecf8427e', 'AHMED', '', '', '', '', 1, 0, 'd8hOSkBXsNCGKvmQaE7eYi2J650fTgop', '', '2019-01-03 11:40:40', '2019-01-12 06:43:21'),
(30, 1, 'AA', 'b0baee9d279d34fa1dfd71aadb908c3f', '', '', '', '', '', 1, 1, 'Hwl9FBcSsLnDkiqxOXQ12PZTWoA86j37', '103.120.92.183', '2019-01-06 01:35:20', '2019-04-15 05:08:15'),
(31, 3, 'WASIM', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', '', '', 1, 0, 'r2N8PCafKWvoOxBzcw4tQuyhXRJl9iHM', '', '2019-01-06 15:42:16', '2019-01-06 10:12:16'),
(32, 1, 'FAHAD', '3f088ebeda03513be71d34d214291986', 'FAHAD SHAIKH', '', '', '', '', 1, 1, '5WtqzxDf73rmLhT1kgUCK4ywoHp20vaO', '103.120.92.183', '2019-01-13 23:06:59', '2019-04-12 13:34:47'),
(33, 3, 'ARMAAN', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', '', '', 1, 0, 'law0gDbpNtrZsJRCMmHf9UjFhdK3SeIv', '', '2019-01-15 12:17:29', '2019-01-15 06:47:29'),
(34, 1, 'admin', '21232f297a57a5a743894a0e4a801fc3', NULL, '', '', '', NULL, 1, 0, NULL, '::1', NULL, '2019-07-16 06:22:45'),
(35, 3, 'NOOR MOHAMMED', 'd41d8cd98f00b204e9800998ecf8427e', 'NOOR MOHAMMED', '', '', '', '', 1, 0, 'NpnUJKreqLa8uyPMokORWDIZx2VfC3Fh', '', '2019-02-21 23:16:23', '2019-02-24 06:35:11'),
(36, 2, 'DINESH', 'e261489ab942429a6600c1c4121ac14d', 'DINESH PATEL', '', '', '', '', 1, 1, '5tJmrObwfecKA1h4zpZEL0PDoInij2Uv', '103.120.92.183', '2019-03-23 11:59:09', '2019-04-12 15:46:00'),
(37, 3, 'SAFIQ', '3d2172418ce305c7d16d4b05597c6a59', 'MOHD SAFIQ', '', '', '', '', 1, 0, 'EarKdOMXs9V7bxGJHIcpleUk2P3NvSjt', '', '2019-04-03 11:23:04', '2019-04-03 05:53:04'),
(38, 3, 'MUKADDAS', 'd41d8cd98f00b204e9800998ecf8427e', 'MUKADDAS', '', '', '', '9167687580', 1, 0, '5dLpD9SuCG3YK6EnwcgyTBlNqzhoIMsU', '', '2019-04-11 13:31:05', '2019-04-11 08:01:05'),
(39, 2, 'abhi12@mail.com', '$2a$10$DUkd92MhC6op4q87fCyeEuLMSo7M49nYRHq1Mih.zneWvoTIMsp22', 'men', '', '', '', NULL, 1, 0, NULL, '', NULL, '2019-07-23 08:56:31'),
(40, 2, 'abhi1@mail.com', '$2a$10$/OA48R8KePw1qF/ioCAvP.co5ECWNQ7mLJS6uEg2SK047XO5AwCEC', 'men', '', '', '', NULL, 1, 0, NULL, '', NULL, '2019-07-23 08:56:29'),
(41, 2, 'abhiq1@mail.com', '$2a$10$.dnmp8BKRLMROvcUtw6CD.91JwBMa4YNzCTQ.pUVUHj1fe/RMROty', 'men', '', '', '', NULL, 1, 0, NULL, '', NULL, '2019-07-23 08:56:26'),
(42, 2, 'abhiq12@mail.com', '$2a$10$C.NBI4F7miqE0wpBUEHV4OJbc8ByhYGUpQBik2ey/7Bm9IbsU1qGW', 'men', '', '', '', NULL, 1, 0, NULL, '', NULL, '2019-07-23 09:04:48'),
(43, 1, 'abq12@mail.com', '$2a$10$wpvq3QX4cUSv9iQnfX2diuTp6GM0Hr8oYwZTT7F/vCQdkBjCh1dse', 'men', '', '', '', NULL, 1, 0, NULL, '', NULL, '2019-07-23 08:56:20'),
(44, NULL, NULL, NULL, 'men', '', '', '', NULL, 1, 0, NULL, '', NULL, '2019-07-23 10:37:42'),
(45, NULL, 'vishalk@asda.com', '$2a$10$icKe4pqNedL6LvmQMq11OOjuR1o6.hYOi7plk9OKZ5JTcRlr1Sy0W', NULL, '', '', '', NULL, 1, 0, NULL, '', NULL, '2019-07-24 13:00:51'),
(46, NULL, 'abq12qw@mail.com', '$2a$10$AASni//CrbuPXoJxrF6nx.6rq1G3iq5TzxuEfYgAt8sFH9dcGy5sq', NULL, '', '', '', NULL, 1, 0, NULL, '', NULL, '2019-07-24 13:01:24'),
(47, NULL, 'sdfad@sad.ad', '$2a$10$ZRJ/qpNIAZJTYFFiCenjNuCFMrlI72f7CKQ31dzlXc3M3OlcxNEbC', NULL, '', '', '', NULL, 1, 0, NULL, '', NULL, '2019-07-24 13:02:38'),
(48, NULL, 'abhi@1212.com', '$2a$10$D8VyDVdyfk2ZwNJ6qHd2QeRJtkutr0Xd2qgLVkLl7gqRDv.2vC222', NULL, '', '', '', NULL, 1, 0, NULL, '', NULL, '2019-07-24 13:04:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_master`
--
ALTER TABLE `category_master`
 ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `product_master`
--
ALTER TABLE `product_master`
 ADD PRIMARY KEY (`pro_id`);

--
-- Indexes for table `user_master`
--
ALTER TABLE `user_master`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_master`
--
ALTER TABLE `category_master`
MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `product_master`
--
ALTER TABLE `product_master`
MODIFY `pro_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user_master`
--
ALTER TABLE `user_master`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=49;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
