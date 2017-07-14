/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hdstyle

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-14 14:10:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) CHARACTER SET utf8 NOT NULL,
  `newPrice` int(55) NOT NULL,
  `oldPrice` int(10) NOT NULL,
  `buyImg` varchar(255) CHARACTER SET utf8 NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=222 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '../img/list_pic1_1.jpg', '136', '278', '../img/buy.png', '娜娜日记2017夏装新款女装蓝色宽松背带裤女牛仔裤长裤裤子NL');
INSERT INTO `goods` VALUES ('2', '../img/list_pic1_2.jpg', '123', '222', '../img/buy.png', '韩都衣舍2017韩版女装女装夏新款侧面开叉宽松阔腿休闲裤GY6000娋');
INSERT INTO `goods` VALUES ('3', '../img/list_pic1_3.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款高腰九分连体休闲裤JQ9931樰0503');
INSERT INTO `goods` VALUES ('4', '../img/list_pic1_4.jpg', '88', '198', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松潮绑带长T裙连衣裙女IG8022僥');
INSERT INTO `goods` VALUES ('5', '../img/list_pic1_5.jpg', '116', '228', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('6', '../img/list_pic1_6.jpg', '149', '168', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('7', '../img/list_pic1_7.jpg', '98', '299', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('8', '../img/list_pic1_8.jpg', '136', '278', '../img/buy.png', '韩都衣舍2017韩版女装夏新款白色微喇毛边九分牛仔裤');
INSERT INTO `goods` VALUES ('9', '../img/list_pic1_9.jpg', '116', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('10', '../img/list_pic1_10.jpg', '152', '288', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('11', '../img/list_pic1_11.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('12', '../img/list_pic1_12.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('13', '../img/list_pic1_13.jpg', '122', '233', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('14', '../img/list_pic1_14.jpg', '122', '168', '../img/buy.png', '韩都衣舍2017韩版女装夏新款白色微喇毛边九分牛仔裤');
INSERT INTO `goods` VALUES ('15', '../img/list_pic1_15.jpg', '222', '289', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('16', '../img/list_pic1_16.jpg', '88', '168', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款高腰九分连体休闲裤JQ9931樰0503');
INSERT INTO `goods` VALUES ('17', '../img/list_pic1_17.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松潮绑带长T裙连衣裙女IG8022僥');
INSERT INTO `goods` VALUES ('18', '../img/list_pic1_18.jpg', '66', '188', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('19', '../img/list_pic1_19.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('20', '../img/list_pic2_1.jpg', '123', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏新款白色微喇毛边九分牛仔裤');
INSERT INTO `goods` VALUES ('38', '../img/list_pic2_19.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('21', '../img/list_pic2_2.jpg', '152', '288', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('22', '../img/list_pic2_3.jpg', '88', '198', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('23', '../img/list_pic2_4.jpg', '116', '228', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('24', '../img/list_pic2_4.jpg', '149', '168', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('25', '../img/list_pic2_6.jpg', '98', '299', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('26', '../img/list_pic2_7.jpg', '136', '278', '../img/buy.png', '韩都衣舍2017韩版女装夏新款白色微喇毛边九分牛仔裤');
INSERT INTO `goods` VALUES ('27', '../img/list_pic2_8.jpg', '116', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松潮绑带长T裙连衣裙女IG8022僥');
INSERT INTO `goods` VALUES ('28', '../img/list_pic2_9.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款高腰九分连体休闲裤JQ9931樰0503');
INSERT INTO `goods` VALUES ('29', '../img/list_pic2_10.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('30', '../img/list_pic2_11.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('31', '../img/list_pic2_12.jpg', '122', '233', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('32', '../img/list_pic2_13.jpg', '122', '168', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('33', '../img/list_pic2_14.jpg', '222', '289', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('34', '../img/list_pic2_15.jpg', '88', '168', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('35', '../img/list_pic2_16.jpg', '99', '222', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('36', '../img/list_pic2_17.jpg', '66', '188', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松潮绑带长T裙连衣裙女IG8022僥');
INSERT INTO `goods` VALUES ('37', '../img/list_pic2_18.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('39', '../img/list_pic3_1.jpg', '136', '278', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('41', '../img/list_pic3_3.jpg', '123', '222', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('40', '../img/list_pic3_2.jpg', '136', '278', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('48', '../img/list_pic3_10.jpg', '116', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('49', '../img/list_pic3_11.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('50', '../img/list_pic3_12.jpg', '152', '288', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('51', '../img/list_pic3_13.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('52', '../img/list_pic3_14.jpg', '122', '233', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('53', '../img/list_pic3_15.jpg', '122', '168', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('54', '../img/list_pic3_16.jpg', '222', '289', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('55', '../img/list_pic3_17.jpg', '88', '168', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('56', '../img/list_pic3_18.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('57', '../img/list_pic3_19.jpg', '66', '188', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松潮绑带长T裙连衣裙女IG8022僥');
INSERT INTO `goods` VALUES ('58', '../img/list_pic4_1.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('59', '../img/list_pic4_2.jpg', '123', '222', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('60', '../img/list_pic4_3.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('61', '../img/list_pic4_4.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('62', '../img/list_pic4_4.jpg', '88', '198', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('63', '../img/list_pic4_5.jpg', '116', '228', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('64', '../img/list_pic4_6.jpg', '149', '168', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('65', '../img/list_pic4_7.jpg', '98', '299', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('66', '../img/list_pic4_8.jpg', '136', '278', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松潮绑带长T裙连衣裙女IG8022僥');
INSERT INTO `goods` VALUES ('67', '../img/list_pic4_9.jpg', '116', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('69', '../img/list_pic4_11.jpg', '152', '288', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('68', '../img/list_pic4_10.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('70', '../img/list_pic4_12.jpg', '122', '233', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('71', '../img/list_pic4_13.jpg', '122', '168', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('72', '../img/list_pic4_14.jpg', '222', '289', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款高腰九分连体休闲裤JQ9931樰0503');
INSERT INTO `goods` VALUES ('73', '../img/list_pic4_15.jpg', '88', '168', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('74', '../img/list_pic4_16.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('75', '../img/list_pic4_17.jpg', '66', '188', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松潮绑带长T裙连衣裙女IG8022僥');
INSERT INTO `goods` VALUES ('76', '../img/list_pic4_18.jpg', '99', '222', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('42', '../img/list_pic3_4.jpg', '152', '288', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款纯色碎花吊带连衣裙');
INSERT INTO `goods` VALUES ('43', '../img/list_pic3_5.jpg', '88', '198', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('44', '../img/list_pic3_6.jpg', '116', '228', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('45', '../img/list_pic3_7.jpg', '149', '168', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款修身显瘦微喇牛仔裤PC7576晽0524');
INSERT INTO `goods` VALUES ('46', '../img/list_pic3_8.jpg', '98', '299', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('47', '../img/list_pic3_9.jpg', '136', '278', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款修身显瘦微喇牛仔裤PC7576晽0524');
INSERT INTO `goods` VALUES ('77', '../img/list_pic5_1.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('78', '../img/list_pic5_2.jpg', '123', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松潮绑带长T裙连衣裙女IG8022僥');
INSERT INTO `goods` VALUES ('79', '../img/list_pic5_3.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('80', '../img/list_pic5_4.jpg', '123', '666', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款修身显瘦微喇牛仔裤PC7576晽0524');
INSERT INTO `goods` VALUES ('81', '../img/list_pic5_4.jpg', '333', '777', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('202', '../img/list_pic5_5.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款开衩中长款短袖连衣裙JN7239埕0524');
INSERT INTO `goods` VALUES ('203', '../img/list_pic5_6.jpg', '99', '222', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('204', '../img/list_pic5_7.jpg', '123', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款高腰九分连体休闲裤JQ9931樰0503');
INSERT INTO `goods` VALUES ('205', '../img/list_pic5_8.jpg', '99', '222', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('206', '../img/list_pic5_9.jpg', '123', '666', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款修身显瘦微喇牛仔裤PC7576晽0524');
INSERT INTO `goods` VALUES ('207', '../img/list_pic5_10.jpg', '333', '777', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松显瘦纯色白衬衫NG8456茵0525');
INSERT INTO `goods` VALUES ('208', '../img/list_pic5_11.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏新款白色微喇毛边九分牛仔裤');
INSERT INTO `goods` VALUES ('209', '../img/list_pic5_12.jpg', '123', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款修身显瘦微喇牛仔裤PC7576晽0524');
INSERT INTO `goods` VALUES ('210', '../img/list_pic5_2.jpg', '123', '222', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('211', '../img/list_pic5_13.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松潮绑带长T裙连衣裙女IG8022僥');
INSERT INTO `goods` VALUES ('212', '../img/list_pic5_14.jpg', '123', '666', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款修身显瘦微喇牛仔裤PC7576晽0524');
INSERT INTO `goods` VALUES ('219', '../img/list_pic5_17.jpg', '123', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏新款白色微喇毛边九分牛仔裤');
INSERT INTO `goods` VALUES ('214', '../img/list_pic5_15.jpg', '99', '222', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('215', '../img/list_pic5_16.jpg', '99', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款宽松潮绑带长T裙连衣裙女IG8022僥');
INSERT INTO `goods` VALUES ('216', '../img/list_pic5_17.jpg', '123', '222', '../img/buy.png', '韩都衣舍2017韩版女装夏新款白色微喇毛边九分牛仔裤');
INSERT INTO `goods` VALUES ('217', '../img/list_pic5_18.jpg', '99', '222', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('218', '../img/list_pic5_19.jpg', '123', '666', '../img/buy.png', '韩都衣舍2017韩版女装夏装新款高腰九分连体休闲裤JQ9931樰0503');
INSERT INTO `goods` VALUES ('220', '../img/list_pic5_18.jpg', '99', '222', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');
INSERT INTO `goods` VALUES ('221', '../img/list_pic5_19.jpg', '123', '666', '../img/buy.png', '韩都衣舍17新款韩版女装拼接字母A字牛仔短裙半身裙MR7612汩0525');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('18', '10096@qq.com', 'f5bb0c8de146c67b44babbf4e6584cc0');
INSERT INTO `user` VALUES ('29', '10086@qq.com', 'f5bb0c8de146c67b44babbf4e6584cc0');
INSERT INTO `user` VALUES ('28', '10086@qq.com', 'f5bb0c8de146c67b44babbf4e6584cc0');
INSERT INTO `user` VALUES ('26', '10086@163.com', 'f5bb0c8de146c67b44babbf4e6584cc0');
SET FOREIGN_KEY_CHECKS=1;
