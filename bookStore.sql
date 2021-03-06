DROP DATABASE IF EXISTS bookStore;
CREATE DATABASE  IF NOT EXISTS bookStore;
USE bookStore;

DROP TABLE IF EXISTS `typeBook`;
CREATE TABLE IF NOT EXISTS `bookstore`.`typeBook` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
PRIMARY KEY (`id`));

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `bookstore`.`book` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `image` VARCHAR(200) NOT NULL,
  `description` VARCHAR(255) NULL,
  `nbx` VARCHAR(50) NULL,
  `quantity` INT(10) NULL,
  `price` DOUBLE NULL,
  `sale_Price` DOUBLE NULL,
  `type_Book_Id` INT(10) NULL,
  `author` VARCHAR(45) NULL,
  `pages_Number` INT(10) NULL,
  `enable` BOOLEAN NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`type_Book_Id`) REFERENCES `typeBook`(`id`));
  
DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `bookstore`.`customer` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) UNIQUE NOT NULL,
  `passWord` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(10) NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `role` VARCHAR(10) NOT NULL,
PRIMARY KEY (`id`));  

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `bookstore`.`orders` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `total_Money` DOUBLE NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(10) NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `id_Customer` INT(10) NOT NULL,
  `payment` VARCHAR(50) NOT NULL,
  `status` VARCHAR(50) NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`id_Customer`) REFERENCES `customer`(`id`)); 

DROP TABLE IF EXISTS `orders_detail`;
CREATE TABLE IF NOT EXISTS `bookstore`.`orders_detail` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `quantity` INT(10) NULL,
  `price` DOUBLE NULL,
  `id_Orders` INT(10) NOT NULL,
  `id_Book` INT(10) NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`id_Book`) REFERENCES `book`(`id`),
FOREIGN KEY (`id_Orders`) REFERENCES `orders`(`id`)); 

INSERT INTO `bookstore`.`typebook` (`id`, `name`) 
VALUES 
('1', 'S??CH KINH DOANH'),
('2', 'S??CH NGO???I NG???'),
('3', 'S??CH NU??I D???Y CON'),
('4', 'S??CH V??N H???C'),
('5', 'SACH N???U ??N'),
('6', 'SACH K??? N??NG S???NG');

INSERT INTO `bookstore`.`book` (`id`, `name`, `image`, `description`, `nbx`, `quantity`, `price`, `sale_Price`, `type_Book_Id`, `author`, `pages_Number`, `enable`) 
VALUES 
('1', 'NG?????I GI??U C?? NH???T TH??NH BABYLON', 'book1.jpg', 'S??CH D???Y V??? KINH DOANH', 'H?? N???I', '100', '50000', '40000', '1', 'RICHARD', '100', true),
('2', 'KH???I NGHI???P 4.0', 'book2.jpg', 'S??CH D???Y V??? KINH DOANH', 'TP.HCM', '100', '60000', '50000', '1', 'ALEYSA', '130', true),
('3', 'NG??? PH??P TI???NG ANH', 'book3.jpg', 'S??CH D???Y TI???NG ANH', 'H?? N???I', '100', '70000', '40000', '2', 'ELSA', '100', true),
('4', 'C??CH H???C 10 NGO???I NG??? NHANH NH???T', 'book4.jpg', 'S??CH D???Y NGO???I NG???', 'H?? N???I', '100', '70000', '40000', '2', 'ELSA', '100', true),
('5', 'CHA L?? B??NG C??? ?????I CON', 'book5.jpg', 'S??CH D???Y CON TR???', 'H?? N???I', '100', '70000', '40000', '3', 'ELSA', '100', true),
('6', 'PH????NG PH??P GI??O D???C CON C???A NG?????I DO TH??I', 'book6.jpg', 'S??CH D???Y CON TR???', 'H?? N???I', '100', '70000', '40000', '3', 'ELSA', '100', true),
('7', 'T?? B??NH Y??N V??? H???NH PH??C', 'book7.jpg', 'S??CH V??? V??N H???C', 'H?? N???I', '100', '70000', '40000', '4', 'ELSA', '100', true),
('8', 'NH?? GI??? KIM', 'book8.jpg', 'S??CH V??? V??N H???C', 'H?? N???I', '100', '70000', '40000', '4', 'ELSA', '100', true),
('9', 'M??N ??N H??NG NG??Y', 'book9.jpg', 'S??CH D???Y N???U ??N', 'H?? N???I', '100', '70000', '40000', '5', 'ELSA', '100', true),
('10', 'N???U ??N GIA ????NH', 'book10.jpg', 'S??CH D???Y N???U ??N', 'H?? N???I', '100', '70000', '40000', '5', 'ELSA', '100', true),
('11', 'KH??O ??N KH??O N??I S??? C?? ???????C THI??N H???', 'book11.jpg', 'S??CH V??? K??? N??NG S???NG', 'H?? N???I', '100', '70000', '40000', '6', 'ELSA', '100', true),
('12', '?????NG L???A CH???N AN NH??N KHI C??N TR???', 'book12.jpg', 'S??CH V??? K??? N??NG S???NG', 'H?? N???I', '100', '70000', '40000', '6', 'ELSA', '100', true);

INSERT INTO `bookstore`.`customer` (`id`, `name`, `email`, `passWord`, `phone`, `address`, `role`) VALUES 
('1', 'H?? V??n Ti???n', 'havantien@gmail.com', 'tien', '0383751999', 's??? 254 Minh Khai, H?? N???i', 'User'),
('2', 'H?? V??n Ti???n', 'admin', 'admin', '0383751999', 's??? 254 Minh Khai, H?? N???i', 'Admin'),
('3', 'Nguy???n Vi???t Anh', 'vietanh@gmail.com', 'vietanh', '0365123456', 's??? 107 L??nh Nam, H?? N???i', 'User'),
('4', 'Ph???m V??n Minh', 'phamvanminh@gmail.com', 'minh', '0376789456', 's??? 6 Tr???n H??ng ?????o, TP Th??i B??nh, Th??i B??nh', 'User');

INSERT INTO `bookstore`.`orders` (`id`, `date`, `total_Money`, `name`,`phone`, `address`, `id_Customer`, `payment`, `status`) VALUES 
('1', '2020-10-20', '300000', 'H?? V??n Ti???n','0383751999','s??? 254 Minh Khai, H?? N???i','1', 'Online','???? thanh to??n');

INSERT INTO `bookstore`.`orders_detail` (`id`, `quantity`, `price`, `id_Orders`,`id_Book`) VALUES 
('1', '2', '40000', '1','1'),
('2', '3', '40000', '1','2'),
('3', '2', '50000', '1','3');