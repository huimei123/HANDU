require(['config'],function(){
	require(['jquery','hmCarousel'],function($){
		console.log(666);
		console.log($('.top'));
		$('.top').load('../html/base.html');
	});
});