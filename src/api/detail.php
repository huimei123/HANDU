<?php
	// 连接数据库
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'hdstyle';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);

	// 检测连接
	if($conn->connect_error){
		die('连接失败'.$conn->connect_error);
	}

	// 设置编码格式
	$conn->set_charset('utf8');

	//接收前端传来的信息
	$id = ($_GET['id']);


	//验证内容是否与数据库的记录吻合
	$sql = "select * from goods where id='$id' ";


	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);


	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>