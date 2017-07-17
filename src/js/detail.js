require(['config'],function(){
	require(['jquery','hmZoom'],function($){
		
		//插入头部
		$('<div/>').load('./base.html',function(){
			$(this).insertBefore('.detail_wrap');

			$('.pullDTitle').on('mouseover',function(){
				$('.pullDList').show();
			}).on('mouseout',function(){
				$('.pullDList').hide();
			});
			

			$('.menber').on('mouseover',function(){
				$('.hdshow').show();
			}).on('mouseout',function(){
				$('.hdshow').hide();
			});
			$('.message').on('mouseover',function(){
				$('.message_show').show();
			}).on('mouseout',function(){
				$('.message_show').hide();
				});

			// 网站导航
			var timer;
			$('.siteMap').on('mouseover',function(){
				$('.handuBox').show();
			}).on('mouseout',function(){

				$('.handuBox').hide();
			});
			$('.handuBox').on('mouseover',function(){
				$('.handuBox').show();
			}).on('mouseout',function(){
				$('.handuBox').hide();
			});

		});


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

		var guid;
		var data;
		var imgUrl;
		var newPrice;
		var oldPrice;
		var description;
		var currentsGoods ;

		//发送请求
		$.ajax({
			url:'../api/detail.php',
			data:{
				id:getId,
			},
			success:function(res){
				data = JSON.parse(res);
				console.log(data);
				
				currentsGoods = {
					guid : data[0].id,
					imgUrl : data[0].img,
					newPrice : data[0].newPrice,
					oldPrice : data[0].oldPrice,
					description : data[0].description,
					qty:1
				}
				var img = $('.zoomPad img');
				img.attr({
					src : currentsGoods.imgUrl,
					'data-big': currentsGoods.imgUrl,
				});
				$('.zoomPad').hmZoom({
					width:480,
					height: 480,
					position:'right',
					gap: 15,
				});

				$('.sale').text(currentsGoods.newPrice);
				$('.oldPrice').text(currentsGoods.oldPrice);
				$('.product_name').text(currentsGoods.description);


				$('.pay').on('click',function(e){
					e.preventDefault();
					location.href = `./shoppCart.html`;
				});

				

			}
		});


		var $bigImg = $('.zoomPad img');
		
		var $minImg = $('.gallery_nav img');
		
		var $a = $('.gallery_nav a');
		var $span = $('.gallery_nav span');
		
		for(let i = 0 ; i < $minImg.length; i++){
			$minImg.eq(i).on('click',function(e){
				e.preventDefault();
				//改变图片的属性
				$bigImg.attr({
					src: '../img/big'+ i +'.jpg',
					'data-big' : '../img/big'+ i +'.jpg',
				});
				$('.zoomPad').hmZoom({
					width:480,
					height: 480,
					position:'right',
					gap: 15,
				});

				// 小图的样式
				$a.eq(i).addClass('active').siblings().removeClass('active');				
				$span.hide();
				$span.eq(i).show();
			});
		}

		// 选择尺寸
		$('.details_size li').on('click',function(){
			console.log('.select_size');
			$(this).addClass('active1').siblings().removeClass('active1');
			$('.select_size').html($(this).text());
		});

		// 选择颜色
		$('.details_color li').on('click',function(){
			$(this).addClass('active2').siblings().removeClass('active2');
			$('.select_color').html($(this).text());
		});


		//改变数量
		var count = 1;

		$('.plus').on('click',function(){
			count ++;
			$('.amount1').text(count);
			
		});
		$('.sub').on('click',function(){
			count --;
			if(count <= 0){
				count = 0;
			}
			$('.amount1').text(count);
		});

		
		$('.addCart').on('click',function(e){
			e.preventDefault();
			console.log(count);
			currentsGoods.qty = count;
			
			// 先获取cookie中的值
			var cartBox = getCookie('cartBox');
			console.log(cartBox);

			// 如果没有cookie，则赋值空数组
			// 有cookie就转换成对象
			if(cartBox.length>0){
				cartBox = JSON.parse(cartBox);
			}else{
				cartBox = [];
			}

			//去重
			cartBox.forEach(function(item,idx){
				if(item.guid == currentsGoods.guid){
					cartBox.splice(idx,1);
					currentsGoods.qty += item.qty;
				}
			});
			cartBox.unshift(currentsGoods);
			


			// 7天有效期
			var now = new Date();
			now.setDate(now.getDate()+7);

			// 写入cookie
			setCookie('cartBox',decodeURI(JSON.stringify(cartBox)),now);

			$('.goods_buy').show();
		});


	});
});