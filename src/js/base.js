require(['config'],function(){
	require(['jquery','hmCarousel'],function($){
			//banner 轮播图
			$('.banner').hmCarousel({
				imgs:['../img/banner1.jpg','../img/banner2.jpg','../img/banner3.jpg'],
				type:'fade',
				small:false,
				buttons:false,
				autoplay:true,
				page:true
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


			//移动上去改变品牌图片样式 
			var $list = $('.leftSide ul li');
			var $listImg = $list.find('img');
			
			for(let i = 1 ; i <= $list.length; i++){
				$list.eq(i-1).on('mouseover',function(){
					$listImg.eq(i-1).attr('src','../img/'+ 'j' + i +'.png');
				}).on('mouseout',function(){
					$listImg.eq(i-1).attr('src','../img/'+ i +'.png');
				})
			}

			// var html = '';
			// var randPrice1 = Math.round(Math.random()*600);;
			// var randPrice2 = randPrice1*2;

			console.log($('.cloth .abc'));
			//随机生成商品价格
			// html += `
			// 		<div class="price">
			// 			<span class="newPrice"><i>￥</i>${randPrice1}</span>
			// 			<span class="oldPrice">￥${randPrice2}</span>
			// 			<a classs="buyBtn">立即抢购</a>
			// 		</div>	
			// 	`;
			// $('.cloth .abc').append(html);

			var list = '';
			//生成商品信息
			for(var i = 1 ; i < 8; i++){

				list += 
				`
					<ul class='hstyle_boxs'>
						<li class='hstyle_box'>
		          			<a alt='target="_blank'>
		          			<img src="../img/f1_${i}.jpg" />
		            		</a>
		            		<div class="price">
								<span class="newPrice"><i>￥</i>112</span>
								<span class="oldPrice">￥1111</span>
								<a classs="buyBtn">立即抢购</a>
							</div>
		            	</li>
		            	
					</ul>
				`;
			}
			$('.floor_con').append(list);

		});

	});
});