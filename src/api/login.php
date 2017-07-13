<?php
	/*
		与用户相关的所有操作
		* 增 insert
		* 删 delete
		* 查 select
		* 改 update
	 */
	
	// 第一步
	// 配置信息
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'hdstyle';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);


	// 设置编码格式
	$conn->set_charset('utf8');

	// 接收前端传回的数据
	$name = ($_GET['name']);
	$password = $_GET['password'];

	// md5加密密码
	$password = md5($password);

	//验证内容是否与数据库的记录吻合
	$sql = "SELECT * FROM user WHERE (name='$name') AND (password='$password')";
	
	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>