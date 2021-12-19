-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2021 at 10:01 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `softeng21`
--

-- --------------------------------------------------------

--
-- Table structure for table `chargerecord`
--

CREATE TABLE `chargerecord` (
  `RecordID` int(10) NOT NULL,
  `Operator1ID` int(10) NOT NULL,
  `Operator2ID` int(10) NOT NULL,
  `DateFrom` datetime NOT NULL,
  `DateTo` datetime NOT NULL,
  `amount` double NOT NULL,
  `Status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `operator`
--

CREATE TABLE `operator` (
  `OperatorID` int(10) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `ProviderAbrv` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `operator`
--

INSERT INTO `operator` (`OperatorID`, `Name`, `ProviderAbrv`) VALUES
(1, 'aodos', 'AO'),
(2, 'egnatia', 'EG'),
(3, 'gefyra', 'GF'),
(4, 'kentriki_odos', 'KO'),
(5, 'nea_odos', 'NE'),
(6, 'olympia_odos', 'OO'),
(7, 'moreas', 'MR');

-- --------------------------------------------------------

--
-- Table structure for table `pass`
--

CREATE TABLE `pass` (
  `passID` varchar(20) NOT NULL,
  `StationID` varchar(10) NOT NULL,
  `VehicleID` varchar(15) NOT NULL,
  `LogData` datetime NOT NULL,
  `amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `rateID` int(10) NOT NULL,
  `StationID` varchar(10) NOT NULL,
  `VehicleType` varchar(10) NOT NULL,
  `rate` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `station`
--

CREATE TABLE `station` (
  `StationID` varchar(10) NOT NULL,
  `OperatorID` int(10) NOT NULL,
  `StationName` varchar(10) NOT NULL,
  `original` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `station`
--

INSERT INTO `station` (`StationID`, `OperatorID`, `StationName`, `original`) VALUES
('AO00', 1, 'aodos toll', 1),
('AO01', 1, 'aodos toll', 1),
('AO02', 1, 'aodos toll', 1),
('AO03', 1, 'aodos toll', 1),
('AO04', 1, 'aodos toll', 1),
('AO05', 1, 'aodos toll', 1),
('AO06', 1, 'aodos toll', 1),
('AO07', 1, 'aodos toll', 1),
('AO08', 1, 'aodos toll', 1),
('AO09', 1, 'aodos toll', 1),
('AO10', 1, 'aodos toll', 1),
('AO11', 1, 'aodos toll', 1),
('AO12', 1, 'aodos toll', 1),
('AO13', 1, 'aodos toll', 1),
('AO14', 1, 'aodos toll', 1),
('AO15', 1, 'aodos toll', 1),
('AO16', 1, 'aodos toll', 1),
('AO17', 1, 'aodos toll', 1),
('AO18', 1, 'aodos toll', 1),
('AO19', 1, 'aodos toll', 1),
('EG00', 2, 'egnatia to', 1),
('EG01', 2, 'egnatia to', 1),
('EG02', 2, 'egnatia to', 1),
('EG03', 2, 'egnatia to', 1),
('EG04', 2, 'egnatia to', 1),
('EG05', 2, 'egnatia to', 1),
('EG06', 2, 'egnatia to', 1),
('EG07', 2, 'egnatia to', 1),
('EG08', 2, 'egnatia to', 1),
('EG09', 2, 'egnatia to', 1),
('EG10', 2, 'egnatia to', 1),
('EG11', 2, 'egnatia to', 1),
('EG12', 2, 'egnatia to', 1),
('GF00', 3, 'gefyra tol', 1),
('KO00', 4, 'kentriki_o', 1),
('KO01', 4, 'kentriki_o', 1),
('KO02', 4, 'kentriki_o', 1),
('KO03', 4, 'kentriki_o', 1),
('KO04', 4, 'kentriki_o', 1),
('KO05', 4, 'kentriki_o', 1),
('KO06', 4, 'kentriki_o', 1),
('KO07', 4, 'kentriki_o', 1),
('KO08', 4, 'kentriki_o', 1),
('KO09', 4, 'kentriki_o', 1),
('MR00', 7, 'moreas tol', 1),
('MR01', 7, 'moreas tol', 1),
('MR02', 7, 'moreas tol', 1),
('MR03', 7, 'moreas tol', 1),
('MR04', 7, 'moreas tol', 1),
('MR05', 7, 'moreas tol', 1),
('MR06', 7, 'moreas tol', 1),
('MR07', 7, 'moreas tol', 1),
('MR08', 7, 'moreas tol', 1),
('NE00', 5, 'nea_odos t', 1),
('NE01', 5, 'nea_odos t', 1),
('NE02', 5, 'nea_odos t', 1),
('NE03', 5, 'nea_odos t', 1),
('NE04', 5, 'nea_odos t', 1),
('NE05', 5, 'nea_odos t', 1),
('NE06', 5, 'nea_odos t', 1),
('NE07', 5, 'nea_odos t', 1),
('NE08', 5, 'nea_odos t', 1),
('NE09', 5, 'nea_odos t', 1),
('NE10', 5, 'nea_odos t', 1),
('NE11', 5, 'nea_odos t', 1),
('NE12', 5, 'nea_odos t', 1),
('NE13', 5, 'nea_odos t', 1),
('NE14', 5, 'nea_odos t', 1),
('NE15', 5, 'nea_odos t', 1),
('NE16', 5, 'nea_odos t', 1),
('OO00', 6, 'olympia_od', 1),
('OO01', 6, 'olympia_od', 1),
('OO02', 6, 'olympia_od', 1),
('OO03', 6, 'olympia_od', 1),
('OO04', 6, 'olympia_od', 1),
('OO05', 6, 'olympia_od', 1),
('OO06', 6, 'olympia_od', 1),
('OO07', 6, 'olympia_od', 1),
('OO08', 6, 'olympia_od', 1),
('OO09', 6, 'olympia_od', 1),
('OO10', 6, 'olympia_od', 1),
('OO11', 6, 'olympia_od', 1),
('OO12', 6, 'olympia_od', 1),
('OO13', 6, 'olympia_od', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tranceiver`
--

CREATE TABLE `tranceiver` (
  `tagID` varchar(15) NOT NULL,
  `OperatorID` int(10) NOT NULL,
  `balance` double NOT NULL,
  `VehicleID` varchar(15) NOT NULL,
  `LicenseYear` int(4) NOT NULL,
  `original` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tranceiver`
--

INSERT INTO `tranceiver` (`tagID`, `OperatorID`, `balance`, `VehicleID`, `LicenseYear`, `original`) VALUES
('AO11L5271', 1, 0, 'DP11ENT03275', 2008, 1),
('AO12K0807', 1, 0, 'MX39VOS38645', 2018, 1),
('AO13W1028', 1, 0, 'RR73DWB65452', 2017, 1),
('AO18S3731', 1, 0, 'PE73VJU23485', 2010, 1),
('AO19H6549', 1, 0, 'OC94ASJ72024', 2002, 1),
('AO19M3646', 1, 0, 'BM25PHF40639', 2018, 1),
('AO27P4628', 1, 0, 'LG64ARC91224', 2019, 1),
('AO31K4646', 1, 0, 'SU00RDZ36214', 2014, 1),
('AO49I8807', 1, 0, 'YL27IFD65117', 2006, 1),
('AO69I5108', 1, 0, 'HT62RDI04611', 2000, 1),
('AO87S8322', 1, 0, 'DV04FQL29609', 2010, 1),
('AO88V0724', 1, 0, 'SY96JDQ97089', 2004, 1),
('AO94O1451', 1, 0, 'BZ76ROL87339', 2017, 1),
('EG00X1873', 2, 0, 'TV81MAQ99005', 2000, 1),
('EG05B7264', 2, 0, 'IW53OQE31439', 2014, 1),
('EG13U6715', 2, 0, 'JD78PQD35395', 2002, 1),
('EG23G6966', 2, 0, 'EC02LZC49528', 2001, 1),
('EG36L0177', 2, 0, 'TE24LCO18661', 2009, 1),
('EG47I2811', 2, 0, 'XE59BZM26378', 2020, 1),
('EG47U1656', 2, 0, 'IN99SEN20660', 2014, 1),
('EG52J0268', 2, 0, 'QU94IGC75528', 2003, 1),
('EG56V3913', 2, 0, 'CR31GMR97972', 2000, 1),
('EG74B6896', 2, 0, 'DW44ZOO26361', 2009, 1),
('EG76E0993', 2, 0, 'VL67TFO75321', 2007, 1),
('EG79G1284', 2, 0, 'TZ48CCW54765', 2015, 1),
('EG87C3789', 2, 0, 'MU06LHX94338', 2016, 1),
('EG87N4472', 2, 0, 'CM15YCB60994', 2005, 1),
('GF17K5976', 3, 0, 'SL09NOT64494', 2005, 1),
('GF26E1328', 3, 0, 'UF84JOS00561', 2020, 1),
('GF26N8608', 3, 0, 'QN12NTR81378', 2003, 1),
('GF48M7092', 3, 0, 'JE65QJK64802', 2002, 1),
('GF51E2190', 3, 0, 'EN26OAB52983', 2002, 1),
('GF52G9102', 3, 0, 'WU78BMX13511', 2008, 1),
('GF52T0389', 3, 0, 'XF28DGK65250', 2021, 1),
('GF61W4412', 3, 0, 'LM86GYO69819', 2010, 1),
('GF62J1185', 3, 0, 'MP14WFM40909', 2008, 1),
('GF64H7689', 3, 0, 'BY85QGR11636', 2018, 1),
('GF84T8932', 3, 0, 'PF04UCA93312', 2007, 1),
('GF84U4130', 3, 0, 'KW50MJG67260', 2016, 1),
('GF85R2347', 3, 0, 'YX66XYW62640', 2014, 1),
('GF85Z5553', 3, 0, 'CK97FAU13897', 2007, 1),
('GF87C4626', 3, 0, 'IO09FGE68100', 2015, 1),
('GF94Q2036', 3, 0, 'MA30QLI76818', 2019, 1),
('GF96B8067', 3, 0, 'CP56DAO45598', 2017, 1),
('KO37T8485', 4, 0, 'FL13UMN92207', 2006, 1),
('KO38E3788', 4, 0, 'ED51EWW52190', 2017, 1),
('KO44J2006', 4, 0, 'WY00MLL63827', 2000, 1),
('KO53F1683', 4, 0, 'MQ65WJJ60020', 2009, 1),
('KO57Z7727', 4, 0, 'IX01MVL33676', 2001, 1),
('KO58G5356', 4, 0, 'YH66OKD41942', 2019, 1),
('KO64Z6868', 4, 0, 'QW79CHL42244', 2006, 1),
('KO69R5975', 4, 0, 'RV87TIY76692', 2001, 1),
('KO72G8546', 4, 0, 'KB55KTM48860', 2009, 1),
('KO75W9528', 4, 0, 'UO75YNW62238', 2003, 1),
('KO80I5938', 4, 0, 'QO77TFN61853', 2004, 1),
('KO82C5500', 4, 0, 'HW75BKT77773', 2016, 1),
('KO87M8492', 4, 0, 'DO24BCW15511', 2009, 1),
('KO91P5387', 4, 0, 'ZY93PCY41868', 2006, 1),
('KO95P1306', 4, 0, 'JO50FSF60755', 2011, 1),
('MR06V9056', 7, 0, 'RR98KQE80731', 2020, 1),
('MR26E3126', 7, 0, 'QO68DIC93032', 2016, 1),
('MR30M7731', 7, 0, 'HA82SCK64299', 2001, 1),
('MR36J6829', 7, 0, 'QH15HWX24570', 2009, 1),
('MR39O1247', 7, 0, 'IZ65WAT29135', 2002, 1),
('MR55V8401', 7, 0, 'EZ65FLV39493', 2012, 1),
('MR56E8319', 7, 0, 'KF48RSD79865', 2012, 1),
('MR57I0349', 7, 0, 'UA13YTK28483', 2020, 1),
('MR58R4385', 7, 0, 'QN23UHH39091', 2014, 1),
('MR63V2295', 7, 0, 'XV91YMP27722', 2012, 1),
('MR72G8045', 7, 0, 'HE38BQH01623', 2016, 1),
('MR93N1400', 7, 0, 'HR53SRO94328', 2004, 1),
('MR98F8272', 7, 0, 'BI87HYL81972', 2020, 1),
('NE09V3603', 5, 0, 'UP28MBM38391', 2010, 1),
('NE31Q7933', 5, 0, 'EV77EDV52985', 2001, 1),
('NE43B7275', 5, 0, 'FY47TUN40300', 2002, 1),
('NE55G3669', 5, 0, 'PD45WOT56494', 2010, 1),
('NE61X5911', 5, 0, 'JV67MTI17124', 2000, 1),
('NE66B0405', 5, 0, 'NY14GZR94632', 2011, 1),
('NE66N5124', 5, 0, 'PM58XHX45588', 2006, 1),
('NE71H2256', 5, 0, 'NZ35XLQ89678', 2015, 1),
('NE74M0871', 5, 0, 'QP02SYE47964', 2010, 1),
('NE74M6592', 5, 0, 'NO82BAX82566', 2000, 1),
('NE80E5551', 5, 0, 'VX68BAR38623', 2005, 1),
('NE83K9493', 5, 0, 'IA29IQS63679', 2010, 1),
('NE91T5473', 5, 0, 'EG95RTB75032', 2013, 1),
('NE97X0282', 5, 0, 'OY94SZK34436', 2007, 1),
('OO01A7197', 6, 0, 'AY38OQF67603', 2020, 1),
('OO14E0167', 6, 0, 'AT19HLV57173', 2004, 1),
('OO20E8329', 6, 0, 'QX75YWC61835', 2019, 1),
('OO26V4144', 6, 0, 'XV40HUQ04740', 2001, 1),
('OO29X6651', 6, 0, 'EE22TMX10817', 2001, 1),
('OO41Q9202', 6, 0, 'RK48BOP88344', 2016, 1),
('OO43C8099', 6, 0, 'QR03XCJ37459', 2014, 1),
('OO49W8536', 6, 0, 'JF94VYA88954', 2000, 1),
('OO58I4183', 6, 0, 'EM54HQI58682', 2008, 1),
('OO59B1482', 6, 0, 'VJ92OYV94295', 2000, 1),
('OO65G9691', 6, 0, 'IC95TLY24827', 2020, 1),
('OO67L7721', 6, 0, 'BK77KNV91142', 2007, 1),
('OO68H9901', 6, 0, 'WG11QVY31890', 2006, 1),
('OO85U6024', 6, 0, 'LC72NRN52084', 2001, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chargerecord`
--
ALTER TABLE `chargerecord`
  ADD PRIMARY KEY (`RecordID`);

--
-- Indexes for table `operator`
--
ALTER TABLE `operator`
  ADD PRIMARY KEY (`OperatorID`);

--
-- Indexes for table `pass`
--
ALTER TABLE `pass`
  ADD PRIMARY KEY (`passID`);

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`rateID`);

--
-- Indexes for table `station`
--
ALTER TABLE `station`
  ADD PRIMARY KEY (`StationID`);

--
-- Indexes for table `tranceiver`
--
ALTER TABLE `tranceiver`
  ADD PRIMARY KEY (`tagID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chargerecord`
--
ALTER TABLE `chargerecord`
  MODIFY `RecordID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `operator`
--
ALTER TABLE `operator`
  MODIFY `OperatorID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `rate`
--
ALTER TABLE `rate`
  MODIFY `rateID` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
