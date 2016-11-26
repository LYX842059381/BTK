$('#head').load('template/top.html')
//主体轮播
		var zhuti = $('.zhutiLunBoul>li').eq(0).clone(true)
				$('.zhutiLunBoul').append(zhuti)
				
				//设置一个全局变量i,以及获取图片#list的长度（多少个元素）
				var m = 0;
				var zhutisize = $('.zhutiLunBoul li').size();

				function zhutimove () {
					m++;
				
					if (m==zhutisize) {
//						i=0;
						$('.zhutiLunBoul').css('left','0px')
						m=1;
					} 
					$('.zhutiLunBoul').stop(true).animate({left:-1097*m},500)
					//点击第四次的时候i==4，实际是第五张图片，所以用长度减一size-1
					//使按钮下标在第五张的时候默认显示第一个索引，（图片相同）
					if (m==zhutisize-1) {
						$('.zhutibtn li').eq(0).addClass('zhution').siblings().removeClass('zhution');
					} else{
						//i是几，就代表按钮的第几个加上样式
						$('.zhutibtn li').eq(m).addClass('zhution').siblings().removeClass('zhution');
						
					}
				}
				
				var zhutitimer = setInterval(zhutimove,3000);




//方案事件

$('.fanganul li').hover(function  () {
	$(this).find('.fangdi').toggle();
	$(this).find('.zhezhao').toggle();
})

$('.fanganul li').eq(2).css('marginRight','0')
$('.fanganul li').eq(5).css('marginRight','0')


$('.lastcen ul li:last-child').css('border','none')

$('.dibucen ul li').hover(function  () {
	$(this).find('a').css('color','white')
},function  () {
	$(this).find('a').css('color','#a09f9f')
})

$('.dibucen .xiaozong a').hover(function  () {
	$(this).css('background','#d31200')
},function  () {
	$(this).css('background','#535353')
})


$('.lastcen ul li').hover(function  () {
	$(this).find('a').css('color','white')
},function  () {
	$(this).find('a').css('color','#a09f9f')
})