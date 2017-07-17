require(['config'],function(){
	require(['jquery'],function($){

		// 先获取cookie中的值
		var cartBox = getCookie('cartBox');

		// 如果没有cookie，则赋值空数组
		// 有cookie就转换成对象
		if(cartBox.length>0){
			cartBox = JSON.parse(cartBox);
		}else{
			cartBox = [];
		}

		var html = '';
		var sum = 0 ;

				
		cartBox.forEach(function(item,idx){
			sum += item.newPrice * item.qty;
		});

		// 全部商品总计
		$('.shopping_car_total .sum b').text(sum);
		
		html = cartBox.map(function(item,idx){
			return `
				<ul class="cartInfor over">
				<li class="brand_cart fl">
				<div class="product_img">
					<a href="#">
						<img src="${item.imgUrl}">
						
					</a>
				</div>
				<div class="product_infor">
					<div class="product_name">
						<a href="">
							${item.description}
						</a>
					</div>
					<div class="product_size">
						颜色：<span class="color">蓝色</span>
						尺寸：<span class="size">M</span>
					</div>
				</div>
				
				</li>

				<li class="brand_money fl">
					<span class="oldPrice">￥${item.oldPrice}</span>
					￥<span class="newPrice">${item.newPrice}</span>
				</li>

				<li class="brand_number fl">
					<span class="sub">-</span>
					<span class="amount">${item.qty}</span>
					<span class="plus">+</span>
				</li>

				<li class="brand_sale fl">
					¥<span class="xiaoji">${item.newPrice * item.qty}</span>
				</li>

				<li class="brand_operate fl">
					<a href="" class="like">移入收藏夹</a>
					<a href="" class="del">删除</a>
				</li>

				<li class="brand_remark fl"></li>
				</ul>	
				`;
		});
		
		$('.cartGoodsList').append(html);


		//改变购物车的数量 事件委托
		$('.cartGoodsList')[0].addEventListener("click",function(e){
			
			e  =  e || window.event;
			var target = e.target || e.srcElement;

			
			//减数量
			if(target.className.toLowerCase() == 'sub'){
				//数量
				var count = target.nextElementSibling.innerText;
				var xiaoji = target.parentElement.nextElementSibling;
				var newPrice = target.parentElement.previousElementSibling.children[1].innerText;
				count --;
				console.log($('.xiaoji'))

				if(count <= 0){
					count = 0;
				}
				// 商品的数量
				target.nextElementSibling.innerText = count;
				var tatol = count * newPrice;


				//当前商品的索引值
				var goodsIdx = $(target.parentElement).parent('ul').index();
			

				//重新写入cookie
				// 7天有效期
				var now = new Date();
				now.setDate(now.getDate()+7);

				cartBox.forEach(function(item,index){
					if(goodsIdx == index){
						item.qty = count;
					}
				});

				// 写入cookie
				setCookie('cartBox',decodeURI(JSON.stringify(cartBox)),now);

				
				//商品小计
				xiaoji.innerText = `¥${tatol}`;

				var sum = 0 ;

				console.log(cartBox);
				cartBox.forEach(function(item,idx){
					sum += item.newPrice * item.qty;
				});
				console.log(sum);

				// 全部商品总计
				$('.shopping_car_total .sum b').text(sum);

			}

			//增加商品数量
			if(target.className.toLowerCase() == 'plus'){
				var count = target.previousElementSibling.innerText;
				var xiaoji = target.parentElement.nextElementSibling;
				var newPrice = target.parentElement.previousElementSibling.children[1].innerText;
				count ++;

				if(count <= 0){
					count = 0;
				}
				target.previousElementSibling.innerText = count;
				var tatol = count * newPrice;
				
				xiaoji.innerText = `¥${tatol}`;


				//当前商品的索引值
				var goodsIdx = $(target.parentElement).parent('ul').index();
				

				//重新写入cookie
				// 7天有效期
				var now = new Date();
				now.setDate(now.getDate()+7);

				cartBox.forEach(function(item,index){
					if(goodsIdx == index){
						item.qty = count;
					}
				});

				// 写入cookie
				setCookie('cartBox',decodeURI(JSON.stringify(cartBox)),now);


				var sum = 0 ;

				
				cartBox.forEach(function(item,idx){
					sum += item.newPrice * item.qty;
				});

				// 全部商品总计
				$('.shopping_car_total .sum b').text(sum);
			}

		});

		
	});

});