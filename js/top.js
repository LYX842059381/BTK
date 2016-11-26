//导航hover事件

$('.head ul li').hover(function  () {
	$(this).find('img').css('display','block')
},function  () {
	$(this).find('img').css('display','none')
})

$('.head ul li').eq(0).hover(function  () {
	$('.son1').toggle();
})
$('.son1').hover(function  () {
	$('.son1').css('display','block');
	$('.head ul li').eq(0).find('img').css('display','block');
},function  () {
	$('.son1').css('display','none');
	$('.head ul li').eq(0).find('img').css('display','none')
})

$('.head ul li').eq(1).hover(function  () {
	$('.son2').toggle();
})
$('.son2').hover(function  () {
	$('.son2').css('display','block');
	$('.head ul li').eq(1).find('img').css('display','block')
},function  () {
	$('.son2').css('display','none');
	$('.head ul li').eq(1).find('img').css('display','none')
})

$('.head ul li').eq(2).hover(function  () {
	$('.son3').toggle();
})
$('.son3').hover(function  () {
	$('.son3').css('display','block');
	$('.head ul li').eq(2).find('img').css('display','block')
},function  () {
	$('.son3').css('display','none');
	$('.head ul li').eq(2).find('img').css('display','none')
})

$('.head ul li').eq(3).hover(function  () {
	$('.son4').toggle();
})
$('.son4').hover(function  () {
	$('.son4').css('display','block');
	$('.head ul li').eq(3).find('img').css('display','block')
},function  () {
	$('.son4').css('display','none');
	$('.head ul li').eq(3).find('img').css('display','none')
})

$('.head ul li').eq(4).hover(function  () {
	$('.son5').toggle();
})
$('.son5').hover(function  () {
	$('.son5').css('display','block');
	$('.head ul li').eq(4).find('img').css('display','block')
},function  () {
	$('.son5').css('display','none');
	$('.head ul li').eq(4).find('img').css('display','none')
})

$('.head ul li').eq(5).hover(function  () {
	$('.son6').toggle();
})
$('.son6').hover(function  () {
	$('.son6').css('display','block');
	$('.head ul li').eq(5).find('img').css('display','block')
},function  () {
	$('.son6').css('display','none');
	$('.head ul li').eq(5).find('img').css('display','none')
})

$('.head ul li').eq(6).hover(function  () {
	$('.son7').toggle();
})
$('.son7').hover(function  () {
	$('.son7').css('display','block');
	$('.head ul li').eq(6).find('img').css('display','block')
},function  () {
	$('.son7').css('display','none');
	$('.head ul li').eq(6).find('img').css('display','none')
})