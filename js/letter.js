
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000致&nbsp;&nbsp;李志鹏", 
				// "^200见字如晤，展信舒颜<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;文字文字文字^300文字文字文字，^200文字文字文字^600文字文字文字,^600文字文字文字、^200文字文字文字、^600文字文字文字、^200文字文字文字！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;文字文字文字^300文字文字文字^600文字文字文字^300文字文字文字，^600文字文字文字^300文字文字文字！<br><br><p style='float:right; display:block; width:80px;'>^1000李^200志鹏</p><br><br>按钮1<br><br>按钮2"],
				`^200见字如晤，展信舒颜
				<br><br>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				文字文字文字^300文字文字文字！
				<br><br>
				<p id='btn1' style='cursor: pointer;'>樱花相册</p>
    				<br><br>
				<p id='btn2' style='cursor: pointer;'>跳转百度测试</p>
    				`
			],
			typeSpeed: 100,
			backSpeed: 50,
			// 打字机结束后绑定事件
			onComplete:function(){
				// 跳转樱花相册 
				document.getElementById('btn1').addEventListener('click',function(event){
					window.location.replace('yinghua-8pvtmxo0y-lzps-projects-687ab2da.vercel.app');
				})


	                        document.getElementById('btn2').addEventListener('click',function(event){
					window.location.replace('www.baidu.com');
				})

			}
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
