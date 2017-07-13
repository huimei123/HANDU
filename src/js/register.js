require(['config'],function(){
	require(['jquery'],function($){
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


		// //插入头部
		$('<div/>').load('./base.html',function(){
			$(this).insertBefore('.handu_register');

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
		//插入底部
		$('<div/>').load('./footer.html',function(){
			$(this).addClass('footer');
			$(this).insertAfter('.handu_register');
		});


		//表单验证
		
		var email = document.getElementsByClassName('email')[0];
		var passwd1 = document.getElementsByName('password')[0];
		var passwd2 = document.getElementsByName('password')[1];


		//失去焦点时，判断邮件输入是否符合规范
		$(email).on('blur',function(){
			
			var _email = this.value;
			

			if(!/^[\w\-\.]+@[\da-z\-]+(\.[a-z]{2,})+$/.test(_email)){
				$('.emailTip').show();
				return false;
			}
			else{
				$('.emailTip').hide();
				return false;
			}
		});


		//失去焦点时，判断密码是否符合规范
		$(passwd1).on('blur',function(){
			
			var _passwd1 = this.value;
			
			if(!/^[^\s]{8,20}$/.test(_passwd1)){
				$('.passwdTip1').show();
				return false;
			}
			else{
				$('.passwdTip1').hide();
				return false;
			}
		});
		
		//失去焦点时，判断确认密码是否符合规范
		$(passwd2).on('blur',function(){

			var _passwd2 = this.value;
			var $passwd1 =  $(passwd1).val();
			console.log(_passwd2);
			console.log($passwd1);

			if($passwd1 !== _passwd2){
				$('.passwdTip3').show();
				return false;
			}else{
				$('.passwdTip3').hide();
			}

		});


		//提交注册信息
		$('.agree').on('click',function(){
			$.ajax({
				url:'../api/create_user.php',
				data:{
					name:$(email).val(),
					password:$(passwd1).val(),
				},
				success:function(res){
					console.log(res);
				}
			});
		});


	});
});