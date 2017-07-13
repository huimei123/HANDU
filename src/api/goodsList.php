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


	// 查找所有商品信息
	$sql = "select * from goods";

	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);


	$page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;

	// 每页显示数
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 19;

	$res = array(
		'data'  => array_slice($row, ($page_no-1)*$qty,$qty),
		'qty' => $qty,
		'total'=>count($row), 
	);

	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>