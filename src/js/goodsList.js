require(['config'],function(){
	require(['jquery','hmShake'],function($){
		//插入头部
		$('<div/>').load('./base.html',function(){
			$(this).insertBefore('.goods_wrap');

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
		// 插入底部
		$('<div/>').load('./footer.html',function(){
			$(this).addClass('footer');
			$(this).insertAfter('.goods_wrap');
		});

		var pageNo = 1;
		var lastPage = 2;

		//懒加载，滚动加载更多图片
		$(window).on('scroll',function(){
			var scrollTop = $(window).scrollTop();
			var winHeight = $(window).height();
			var scrollHeight = $('html').outerHeight();

			// console.log(scrollTop,winHeight,scrollHeight);

			// 判断页面滚动到底部
			if(scrollTop >= scrollHeight - winHeight - 2300){
				console.log(6666);
				if(pageNo == lastPage) return;
				$.ajax({
					url:'../api/goodsList.php',
					data:{
						pageNo:pageNo,
						qty:19,
					},
					dataType:'json',
					success:function(res){
						console.log(res);
						var data = res.data;
						console.log(data);
						
						
						var $div = $('<div/>').addClass('active_prefect');
						
						$div.insertBefore($('.user_show'));
						var $ul = $('<ul/>');
						$('<img/>').attr('src','../img/list_dec1.jpg').appendTo($div);
						$ul.appendTo($div);
						
						var htmlList = '';
						
						for(var j = 0 ; j < 19 ; j++){
							htmlList += `
								<li data-guidId="${data[j].id}">
									<a href="./detail.html?id=${data[j].id}"><img src="${data[j].img}"/></a>
									<div class="infor">
										<p class="price">
											<span class="newPrice"><i>￥</i>${data[j].newPrice}</span>
											<span class="oldPrice">￥${data[j].oldPrice}</span>
										</p>
										<a href="" class="buy">
											<img src="${data[j].buyImg}"/>
										</a>
									</div>
								</li>
							`;
						}
						$ul.append(htmlList);
						pageNo ++;
					}

				});

				// 更新lastPage
				lastPage = pageNo;
			}

		});


		
		var $li = $('.user_show_list li');
		var $bee = $('.hbs ul li');
	
		$li.on('mouseenter',function(){

			var idx = $(this).index();
			//改变图片的透明度
			$(this).find('img').stop().animate({
				opacity:0.6,
			});
			//实现抖动
			$(this).shake();
			$('.msk').eq(idx).stop().animate({
				top:220,
			});

			}).on('mouseleave',function(){

				$(this).find('img').stop().animate({
					opacity:1,

				});
				$('.msk').stop().animate({
					top:-50,
				});
			});
		
		$bee.on('mouseenter',function(){
			$(this).find('i').stop().animate({
				width:$(this).outerWidth() * 1.1,
				height:$(this).outerHeight() * 1.1,
				opacity:0
			});
			$(this).find('img').stop().animate({
				width:$(this).outerWidth() * 1.1,
				height:$(this).outerHeight() * 1.1,
				top:10,
				left:-5,
			}).css('zIndex',100);
		}).on('mouseleave',function(){
			$(this).find('img').stop().animate({
				width: 130,
	    		height: 150,
			}).css('zIndex',13);
		});


	});
});