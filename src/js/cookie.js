
/**
 * [设置cookie函数]
 * @param {String} name    [cookie名]
 * @param {String} val     [cookie值]
 * @param {[Date]} expires [有效期]
 * @param {[String]} path    [路径]
 */
function setCookie(name,val,expires,path){
	// cookie名/值（必填）
	var str_cookie = name + '=' + val;

	// cookie有效期
	if(expires){
		str_cookie += ';expires=' + expires.toUTCString();
	}

	// cookie路径
	if(path){
		str_cookie += ';path=' + path;
	}

	document.cookie = str_cookie;
}

/**
 * [获取cookie]
 * @param  {String} name [cookie名]
 * @return {String}      [返回值]
 */
function getCookie(name){
	// 获取所有cookie并拆分成数组
	var cookies = document.cookie;
	var arr_cookie = cookies.split('; ');

	// 存放cookie值
	var res = '';

	// 遍历数组，找到所需的cookie，并返回
	for(var i=0;i<arr_cookie.length;i++){
		var arr = arr_cookie[i].split('=');
		if(arr[0] === name){
			res = arr[1];
		}
	}

	return res;
}


/**
 * [删除cookie的方法]
 * @param  {String} name [cookie名]
 */
function deleteCookie(name){
	// 利用设置有效期来达到删除cookie的效果
	var now = new Date();
	now.setDate(now.getDate()-1);
	document.cookie = name + '=0;expires=' + now.toUTCString();
}
// deleteCookie(name)

