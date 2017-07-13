require(['config'],function(){
	require(['jquery','hmZoom'],function($){
		$('.zoomPad').hmZoom({
			width:480,
			height: 480,
			position:'right',
			gap: 15,
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

		$('.details_size li').on('click',function(){
			var idx = $(this).index();
			$(this).addClass('active1').siblings().removeClass('active1');
		});

		$('.details_color li').on('click',function(){
			var idx = $(this).index();
			$(this).addClass('active2').siblings().removeClass('active2');
		});

		var count = 1; console.log($('.sub'));
		$('.plus').on('click',function(){
			count ++;
			console.log(count);
			$('.amount').attr('value',count);
		});
		$('.sub').on('click',function(){
			count --;
			if(count <= 0){
				count = 0;
			}
			$('.amount').attr('value',count);
		})
	});
});