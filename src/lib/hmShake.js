;(function($){
		$.fn.shake = function (options) {

		//默认参数
		var defaults = {
			intShakes:2,  //抖动的次数
			intDistance:10, //抖动的距离
			intDuration:400,  //抖动的间隔时间
		}
		// 扩展
		var opt = $.extend({},defaults,options);


      	this.each(function () {
          var jqNode = $(this);
          jqNode.css({ position: 'relative' });
          for (var x = 1; x <= opt.intShakes; x++) {
              jqNode.animate({ left: (opt.intDistance * -1) }, (((opt.intDuration / opt.intShakes) / 4)))
              .animate({ left: opt.intDistance }, ((opt.intDuration / opt.intShakes) / 2))
              .animate({ left: 0 }, (((opt.intDuration / opt.intShakes) / 4)));
         	}
     	});
     	return this;
 	}
})(jQuery);