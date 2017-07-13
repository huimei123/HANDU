require(['config'],function(){
	require(['jquery'],function($){
		

		//插入头部
		$('<div/>').load('./base.html',function(){
			$(this).insertBefore('.hd_login');

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
		//插入底部
		$('<div/>').load('./footer.html',function(){
			$(this).addClass('footer');
			$(this).insertAfter('.hd_login');
		});

		//验证登录
		$('.login_btn').on('click',function(e){
			e.preventDefault();
	
			$.ajax({
				url:'../api/login.php',
				data:{
					name:$('.name').val(),
					password:$('.passwd').val(),
				},
				success:function(res){
					console.log(res);
					var data = JSON.parse(res);
					
					if(data.length === 0){
						$('.tip').show();
					}else{
						$('.tip').hide();
						location.href = 'http://localhost:3000';
					}
				}
			});
		});


	});
});