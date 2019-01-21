/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost:3306
 Source Schema         : testgolang

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 21/01/2019 08:23:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` smallint(2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'Quần jean', 1);
INSERT INTO `category` VALUES (2, 'Quần jogger', 1);
INSERT INTO `category` VALUES (3, 'Áo longtee', 2);

-- ----------------------------
-- Table structure for clothes
-- ----------------------------
DROP TABLE IF EXISTS `clothes`;
CREATE TABLE `clothes`  (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `categoryId` int(5) NOT NULL,
  `gender` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `amount` int(11) NULL DEFAULT NULL,
  `price` int(11) NULL DEFAULT NULL,
  `created` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_clothes_category`(`categoryId`) USING BTREE,
  CONSTRAINT `fk_clothes_category` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 56 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of clothes
-- ----------------------------
INSERT INTO `clothes` VALUES (15, 'a', 2, '2', 2, 2, NULL, 1);
INSERT INTO `clothes` VALUES (16, '2', 2, '2', 2, 2, NULL, 1);
INSERT INTO `clothes` VALUES (17, '2', 2, '2', 2, 2, NULL, 1);
INSERT INTO `clothes` VALUES (18, '2', 2, '2', 2, 2, NULL, 1);
INSERT INTO `clothes` VALUES (19, '2', 2, '2', 2, 2, NULL, 1);
INSERT INTO `clothes` VALUES (20, '2', 2, '2', 2, 2, NULL, 2);
INSERT INTO `clothes` VALUES (21, '2', 2, '2', 2, 2, NULL, 2);
INSERT INTO `clothes` VALUES (22, '2', 2, '2', 2, 2, NULL, 2);
INSERT INTO `clothes` VALUES (23, '2', 2, '2', 2, 2, NULL, 1);
INSERT INTO `clothes` VALUES (24, '2', 2, '2', 2, 2, NULL, 2);
INSERT INTO `clothes` VALUES (25, '2', 2, '2', 2, 2, NULL, 1);
INSERT INTO `clothes` VALUES (26, '2', 2, '2', 2, 2, NULL, 2);
INSERT INTO `clothes` VALUES (29, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (30, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (31, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (32, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (33, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (34, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (35, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (36, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (37, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (38, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (39, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (40, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (41, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (42, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (43, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (44, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (45, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (46, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (47, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (48, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (49, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (50, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (51, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (52, '2', 2, '2', 2, 2, NULL, 0);
INSERT INTO `clothes` VALUES (53, 'asda', 1, 'Nữ', 21, 12, '28-12-2018', 0);
INSERT INTO `clothes` VALUES (54, 'sdad', 2, 'Nam', 12, 1500000, '03-01-2019', 0);
INSERT INTO `clothes` VALUES (55, 'asd', 1, 'Nữ', 12, 1500000, '03-01-2019', 0);

-- ----------------------------
-- Table structure for images
-- ----------------------------
DROP TABLE IF EXISTS `images`;
CREATE TABLE `images`  (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `clothesId` int(5) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `clothesId`(`clothesId`) USING BTREE,
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`clothesId`) REFERENCES `clothes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of images
-- ----------------------------
INSERT INTO `images` VALUES (24, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=3749dc2b-725e-4ff9-9dcb-6c688cddc09e', 15);
INSERT INTO `images` VALUES (25, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fserver.JPG?alt=media&token=21a894c9-c21e-4095-b2f7-a423838b8cc4', 15);
INSERT INTO `images` VALUES (26, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Frs.jpg?alt=media&token=73c45935-c796-4239-aa02-062ec4d04aba', 15);
INSERT INTO `images` VALUES (27, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=d39d9950-128d-4ce5-893d-e468a49c97fb', 16);
INSERT INTO `images` VALUES (28, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Frs.jpg?alt=media&token=bde7a4c6-d29d-4259-84a6-5790da3264cd', 16);
INSERT INTO `images` VALUES (29, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=e6c0682a-fca6-4300-824b-70332cbfa04a', 15);
INSERT INTO `images` VALUES (30, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=6d75b861-f79b-4f7e-9d39-1de273415d4c', 15);
INSERT INTO `images` VALUES (31, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=7f544bf3-74e5-4b01-a2d3-3692b0cf49bd', 15);
INSERT INTO `images` VALUES (32, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=5aa8bc86-adbf-43c1-864d-0e6229a87a00', 15);
INSERT INTO `images` VALUES (33, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=510724b9-c1bb-451e-9fac-e0592d418a33', 15);
INSERT INTO `images` VALUES (34, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=fa3986d6-4dc0-4bb7-999c-e3994090f623', 15);
INSERT INTO `images` VALUES (35, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=a978c63b-9336-4c02-8a24-4c5266e1e0b8', 15);
INSERT INTO `images` VALUES (36, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=a1438cf0-221f-4fd3-a530-75f39bfd0b89', 15);
INSERT INTO `images` VALUES (37, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=0b206230-2459-44c1-aa29-c89edae2f887', 15);
INSERT INTO `images` VALUES (38, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=9c94dd4d-782f-41ac-83f7-1e1998f7a0ad', 15);
INSERT INTO `images` VALUES (39, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=719c049a-e985-4fc9-960b-578fc2f79646', 15);
INSERT INTO `images` VALUES (40, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fserver.JPG?alt=media&token=aefc47c1-6f8d-42c8-99e2-4e6b56f842d5', 15);
INSERT INTO `images` VALUES (41, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fserver.JPG?alt=media&token=656ab32c-9b26-4289-84e8-a381735248e0', 15);
INSERT INTO `images` VALUES (42, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fserver.JPG?alt=media&token=e0aa627d-c920-461e-adef-f35c9ba2d650', 15);
INSERT INTO `images` VALUES (43, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fserver.JPG?alt=media&token=444a1275-5437-4809-bf12-4d771ee40e1a', 17);
INSERT INTO `images` VALUES (44, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fserver.JPG?alt=media&token=d2a1564f-3285-48ef-89db-f00574399007', 18);
INSERT INTO `images` VALUES (45, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Frs.jpg?alt=media&token=731c03c9-e058-4b56-badf-ed7a484f17cc', 18);
INSERT INTO `images` VALUES (46, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Frs.jpg?alt=media&token=ccdf90ff-0f90-465b-9031-21f167ccc4ec', 18);
INSERT INTO `images` VALUES (47, 'https://firebasestorage.googleapis.com/v0/b/shopcode-cd861.appspot.com/o/images%2Fui.JPG?alt=media&token=3e945c91-ef49-465d-9f40-dc33abe79464', 53);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL,
  `firstName` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastName` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userName` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (2, 'asd', 'asd', 'asd1', 'camhoi', 'camhoi');
INSERT INTO `users` VALUES (3, 'asd', 'asd', '1', '2', '3');

SET FOREIGN_KEY_CHECKS = 1;
