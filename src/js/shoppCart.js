require(['config'],function(){
	require(['jquery'],function($){
		//获取URL的参数值
		function getUrlParams(key){
			var params = location.search.slice(1).split('&');
			var res = '';
			params.forEach(function(item){
				var arr = item.split('=');
				if(arr[0] == key){
					res = arr [1];
				}
			});
			return res;
		}

		var getId = getUrlParams('id');
		$.ajax(
			{	
				url:'../api/detail.php',
				data:{
				id:getId,
				},
				success:function(res){
					var data = JSON.parse(res);
					console.log(res);
					var description = data[0].description;
					var newPrice = data[0].newPrice;
					var html = '';
					html = `
						<li class="brand_cart fl">
						<div class="product_img">
							<a href="#">
								<img src="${data[0].img}">
								
							</a>
						</div>
						<div class="product_infor">
							<div class="product_name">
								<a href="">
									${description}
								</a>
							</div>
							<div class="product_size">
								颜色：<span class="color">蓝色</span>
								尺寸：<span class="size">M</span>
							</div>
						</div>
						
						</li>

						<li class="brand_money fl">
							<span class="oldPrice">￥${data[0].oldPrice}</span>
							<span class="newPrice">￥${newPrice}</span>
						</li>

						<li class="brand_number fl">
							<span class="sub">-</span>
							<input type="text" value="1" class="amount"></input>
							<span class="plus">+</span>
						</li>

						<li class="brand_sale fl">
							¥<span class="xiaoji">${newPrice}</span>
						</li>

						<li class="brand_operate fl">
							<a href="" class="like">移入收藏夹</a>
							<a href="" class="del">删除</a>
						</li>

						<li class="brand_remark fl"></li>
							
					`;
					$cart_list = $('<ul/>');
					$cart_list.insertAfter($('.cartGoodsList h3'));
					$cart_list.append(html);

					//改变数量
					var count = 1;
					$('.plus').on('click',function(){
						count ++;
						$('.amount').attr('value',count);
						$tatol = count * newPrice;
						$('.xiaoji').text($tatol);
					});
					$('.sub').on('click',function(){
						count --;
						if(count <= 0){
							count = 0;
						}
						$('.amount').attr('value',count);
						$tatol = count * newPrice;
						$('.xiaoji').text($tatol);
					});



				}
			});

	});

});