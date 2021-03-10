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
('1', 'SÁCH KINH DOANH'),
('2', 'SÁCH NGOẠI NGỮ'),
('3', 'SÁCH NUÔI DẠY CON'),
('4', 'SÁCH VĂN HỌC'),
('5', 'SACH NẤU ĂN'),
('6', 'SACH KỸ NĂNG SỐNG');

INSERT INTO `bookstore`.`book` (`id`, `name`, `image`, `description`, `nbx`, `quantity`, `price`, `sale_Price`, `type_Book_Id`, `author`, `pages_Number`, `enable`) 
VALUES 
('1', 'NGƯỜI GIÀU CÓ NHẤT THÀNH BABYLON', 'book1.jpg', 'SÁCH DẠY VỀ KINH DOANH', 'HÀ NỘI', '100', '50000', '40000', '1', 'RICHARD', '100', true),
('2', 'KHỞI NGHIỆP 4.0', 'book2.jpg', 'SÁCH DẠY VỀ KINH DOANH', 'TP.HCM', '100', '60000', '50000', '1', 'ALEYSA', '130', true),
('3', 'NGỮ PHÁP TIẾNG ANH', 'book3.jpg', 'SÁCH DẠY TIẾNG ANH', 'HÀ NỘI', '100', '70000', '40000', '2', 'ELSA', '100', true),
('4', 'CÁCH HỌC 10 NGOẠI NGỮ NHANH NHẤT', 'book4.jpg', 'SÁCH DẠY NGOẠI NGỮ', 'HÀ NỘI', '100', '70000', '40000', '2', 'ELSA', '100', true),
('5', 'CHA LÀ BÓNG CẢ ĐỜI CON', 'book5.jpg', 'SÁCH DẠY CON TRẺ', 'HÀ NỘI', '100', '70000', '40000', '3', 'ELSA', '100', true),
('6', 'PHƯƠNG PHÁP GIÁO DỤC CON CỦA NGƯỜI DO THÁI', 'book6.jpg', 'SÁCH DẠY CON TRẺ', 'HÀ NỘI', '100', '70000', '40000', '3', 'ELSA', '100', true),
('7', 'TÔ BÌNH YÊN VẼ HẠNH PHÚC', 'book7.jpg', 'SÁCH VỀ VĂN HỌC', 'HÀ NỘI', '100', '70000', '40000', '4', 'ELSA', '100', true),
('8', 'NHÀ GIẢ KIM', 'book8.jpg', 'SÁCH VỀ VĂN HỌC', 'HÀ NỘI', '100', '70000', '40000', '4', 'ELSA', '100', true),
('9', 'MÓN ĂN HÀNG NGÀY', 'book9.jpg', 'SÁCH DẠY NẤU ĂN', 'HÀ NỘI', '100', '70000', '40000', '5', 'ELSA', '100', true),
('10', 'NẤU ĂN GIA ĐÌNH', 'book10.jpg', 'SÁCH DẠY NẤU ĂN', 'HÀ NỘI', '100', '70000', '40000', '5', 'ELSA', '100', true),
('11', 'KHÉO ĂN KHÉO NÓI SẼ CÓ ĐƯỢC THIÊN HẠ', 'book11.jpg', 'SÁCH VỀ KỸ NĂNG SỐNG', 'HÀ NỘI', '100', '70000', '40000', '6', 'ELSA', '100', true),
('12', 'ĐỪNG LỰA CHỌN AN NHÀN KHI CÒN TRẺ', 'book12.jpg', 'SÁCH VỀ KỸ NĂNG SỐNG', 'HÀ NỘI', '100', '70000', '40000', '6', 'ELSA', '100', true);

INSERT INTO `bookstore`.`customer` (`id`, `name`, `email`, `passWord`, `phone`, `address`, `role`) VALUES 
('1', 'Hà Văn Tiến', 'havantien@gmail.com', 'tien', '0383751999', 'số 254 Minh Khai, Hà Nội', 'User'),
('2', 'Hà Văn Tiến', 'admin', 'admin', '0383751999', 'số 254 Minh Khai, Hà Nội', 'Admin'),
('3', 'Nguyễn Việt Anh', 'vietanh@gmail.com', 'vietanh', '0365123456', 'số 107 Lĩnh Nam, Hà Nội', 'User'),
('4', 'Phạm Văn Minh', 'phamvanminh@gmail.com', 'minh', '0376789456', 'số 6 Trần Hưng Đạo, TP Thái Bình, Thái Bình', 'User');

INSERT INTO `bookstore`.`orders` (`id`, `date`, `total_Money`, `name`,`phone`, `address`, `id_Customer`, `payment`, `status`) VALUES 
('1', '2020-10-20', '300000', 'Hà Văn Tiến','0383751999','số 254 Minh Khai, Hà Nội','1', 'Online','đã thanh toán');

INSERT INTO `bookstore`.`orders_detail` (`id`, `quantity`, `price`, `id_Orders`,`id_Book`) VALUES 
('1', '2', '40000', '1','1'),
('2', '3', '40000', '1','2'),
('3', '2', '50000', '1','3');