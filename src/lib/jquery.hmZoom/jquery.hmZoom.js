;(function($){
		$.fn.hmZoom = function(options){

		//默认参数
		var defaults = {
			width:400,  //大图宽度
			height:300, //大图高度
			position:'bottom',
			gap:15,
		}
		// 扩展
		var opt = $.extend({},defaults,options);

		this.each(function(){
			//获取小图div的信息，给小图的div添加类
			var $small = $(this).addClass('hm-zoom');
			var $img = $small.find('img');
			//大图与小图的比例
			var ratio;
			//创建放大镜
			var $zoom = $('<span/>').addClass('minzoom');
			$zoom.appendTo($small);

			//创建大图
			var $big = $('<div/>').addClass('hm-bigzoom'); 
			$big.appendTo('body');
			//$bigImg.show();

			$bigImg = $('<img/>').attr('src',$img.attr('data-big'));
			$bigImg.appendTo($big);

			if(opt.position == 'right'){
				$big.css({
					left:$small.outerWidth() + $small.offset().left + opt.gap,
					top:$small.offset().top
				});
			}else if(opt.position == 'left'){
				$big.css({
					left:$small.offset().left - opt.gap -opt.width,
					top:$small.offset().top
				});
			}else if(opt.position == 'top'){
				$big.css({
					left:$small.offset().left,
					top : $small.offset().top - opt.height - opt.gap,
				})
				
			}else if(opt.position === 'bottom'){
				$big.css({
					left:$small.offset().left,
					top:$small.offset().top +  $small.outerHeight() + opt.gap,
				})
				
			}

			$big.css({
				width:opt.width,
				height:opt.height,
			})

			// 鼠标移入显示放大镜和大图
			$small.on('mouseenter',function(){
				$zoom.show();
				$big.show();

				ratio = $bigImg.outerWidth() / $small.outerWidth();
				

				// 改变放大镜的大小
				// 与大图成比例
				$zoom.css({
					width:opt.width / ratio,
					height:opt.height / ratio,
				});

			}).on('mousemove',function(e){
				var left = e.pageX - $small.offset().left - $zoom.outerWidth()/2;
				var top = e.pageY - $small.offset().top - $zoom.outerHeight()/2;
				
				// 限制放大镜的位置，不能超出图片的可视化区域
				if(left < 0 ){
					left = 0;
				}else if(left > $small.outerWidth() - $zoom.outerWidth()){
					left = $small.outerWidth() - $zoom.outerWidth();
				}

				if(top < 0){
					top = 0 ;
				}else if(top > $small.outerHeight() - $zoom.outerHeight()){
					top = $small.outerHeight() - $zoom.outerHeight();
				}

				//改变放大镜的位置
				$zoom.css({
					left:left,
					top:top,
				});

				//改变大图的位置
				$bigImg.css({
					left:-left * ratio,
					top:-top * ratio
				});
			}).on('mouseleave',function(){
				$zoom.hide();
				$big.hide();
			});

		});
		return this;
	}
})(jQuery);