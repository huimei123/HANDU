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
	$name = isset($_GET['name']) ? $_GET['name'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '123456';

	// md5加密密码
	$password = md5($password);

	// 查找所有用户信息
	$sql = "insert into user(name,password) values('$name','$password')";

	// echo $sql;

	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	if($result){
		echo "数据写入成功";
	}
?>