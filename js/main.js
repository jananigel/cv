$(document).ready(function(){
	var portfolioHelpArr = [
		{"name":"新年電子賀卡",
		"des":"2015年製作的羊年電子賀卡"},
		{"name":"網頁設計",
		"des":"SRDA 網站前端首頁設計"},
		{"name":"APP UI DESIGN",
		"des":"香菸APP UI設計，主要功能以掃描QR CODE與NFC功能來顯示產品資訊。"},
		{"name":"新年電子賀卡",
		"des":"2016年製作的羊年電子賀卡"},
		{"name":"網頁設計",
		"des":"SRDA 網站前端資訊內頁設計"},
		{"name":"APP UI設計",
		"des":"香菸APP UI設計，主要功能以掃描QR CODE與NFC功能來顯示產品資訊。"},
		{"name":"電腦繪圖",
		"des":"GTR 車輛繪圖"},
		{"name":"新年電子賀卡",
		"des":"2016電子賀卡設計"},
		{"name":"APP UI DESIGN",
		"des":"中科院APP首頁設計"},
		{"name":"網頁設計",
		"des":"SRDA 後臺登入頁設計"},
		{"name":"網頁設計",
		"des":"SRDA 後臺版型設計"},
		{"name":"新年電子賀卡",
		"des":"2015年電子賀卡設計"},
		{"name":"APP ICON 設計",
		"des":"香菸APP ICON設計"},
		{"name":"新年電子賀卡設計",
		"des":"2015 羊年電子賀卡設計"},
		{"name":"3D 場景設計",
		"des":"主要設計出陰鬱的恐怖氛圍，所以以冷色系與森林及墓碑來作表現。"},
		{"name":"3D 場景設計",
		"des":"希望做出突破森林後海闊天空的情境，所以以陽光照入被樹林覆蓋的地方。"},
		{"name":"3D 室內設計",
		"des":"玄關設計"},
		{"name":"網頁設計",
		"des":"Open Data版型一"},
		{"name":"網頁設計",
		"des":"Open Data版型二"},
		{"name":"網頁設計",
		"des":"桃園清潔稽查大隊版型設計"},
		{"name":"網頁設計",
		"des":"世界客屬總會網站版型一"},
		{"name":"網頁設計",
		"des":"世界客屬總會網站版型二"},
		{"name":"網頁設計",
		"des":"世界客屬總會網站版型三"},
		{"name":"網頁設計",
		"des":"台北廢棄機汽車查報前台網站設計"},
		{"name":"網頁設計",
		"des":"全國宿舍登入頁設計"},
		{"name":"網頁設計",
		"des":"桃園環保局網站設計"},
		{"name":"網頁設計",
		"des":"世界客屬總會版型設計四"}];

	$('img.tag').css({
		marginLeft: ($('.self').width() / 2) - 40
	});

	/*$('.print').mouseover(function(){
		$('.print').html('<span>Download</span>');
		$('.print').css({
			width: '100px',
			borderRadius: '0',
			transform: 'rotate(0)'
		});
	});
	$('.print').mouseout(function(){
		$('.print').html('<span>︿</span>');
		$('.print').css({
			width: '30px',
			borderRadius: '50%',
			transform: 'rotate(180)'
		});
	});*/
	//console.log('next ajax');
	//$.ajax({
	//	url: 'http://127.0.0.1:3000',
	//	type: 'get',
	//	dataType: 'json',
	//	success: function (data) {
	//	//console.log("recive data length: " + data.Data.length);
	//	//console.log("receive data data.Data[i].IntId = " + data.Data[0].IntId);
	//	_dbData = data;
	//	console.log('data = ' + data[0]['_id']);
	//		/*_perData = (_dbData.Data.length < _perData) ? _dbData.Data.length : PER_DATA;
	//		console.log("_dbData.length = " + _dbData.Data.length);
	//		console.log("_perData = " + _perData);*/
	//		/*for(i = 0 ; i < _perData ; ++i){  //default data.Data.length = 5
	//			$('.getJSON').append(
	//				'<tr><td>' + i + '</td><td>' + data.Data[i].IntId + '</td><td>' + data.Data[i].Code + '</td><td>' + data.Data[i].CreatedId + '</td><td>' + data.Data[i].CreateDate + '</td><td>' + data.Data[i].ModifyId + '</td><td>' + data.Data[i].ModifyDate + '</td><td>' + data.Data[i].CounselorId + '</td><td>' + data.Data[i].UserName + '</td><td>' + data.Data[i].PassWord + '</td><td>' + data.Data[i].Name + '</td><td>' + data.Data[i].IdLast4 + '</td><td>' + data.Data[i].Birthday + '</td><td><button class = "btn btn-warning" name = "editor' + i + '"><span class = "glyphicon glyphicon-pencil"></span></button></td><td><button class = "btn btn-danger" name = "delete' + i + '"><span class = "glyphicon glyphicon-trash"></span></button></td></tr>');
	//		}*/
	//	},
	//	complete: function(){
	//		console.log('complete');
	//	}
	//});

	//學經歷輪播
	$('.edu > ul.opt > li').click(function(){
		changeExp('.edu','.school',this);
	});
	$('.comp > ul.opt > li').click(function(){
		changeExp('.comp','.corp',this);
	});
	
	//技能圓點動畫與長條圖動畫
	$('.menu > ul > a > li').click(function(){
		var index = $('.menu > ul > a > li').index(this) + 1;
		$('.menu > ul > a > li').removeClass('menu-active');
		$(this).addClass('menu-active');
		$('.col.m8 > .content').fadeOut(200).delay(600);
		$('.col.m8 > .content:nth-child(' + index + ')').fadeIn(200,function(){
			if(index == 3){
				var skillCount = $('.skill').length;
				var delayTime = 0;
				for(i = 1 ; i <= skillCount ; ++i){
					$('.skill:nth-child(' + i + ') > .level > .curr.text-center').css({
						width: $('.skill:nth-child(' + i + ') > .level > .curr.text-center').text()
					});
				}

				for(j = 1 ; j <= $('.lan').length ; ++j){
					for(k = 1 ; k <= $('.lan:nth-child(' + j + ') > ul').attr('data-level') ; ++k){
						delayTime += 120; 
						/*$('.lan:nth-child(' + j + ') > ul > li:nth-child(' + k + ')').css({
							background: 'red'
						});*/
						$('.lan:nth-child(' + j + ') > ul > li:nth-child(' + k + ')').delay(delayTime).queue(function(next){
							$(this).css({
								background: '#fbd341'
							});
							next();
						});
					}
				}
			}else{
				$('.skill > .level > .curr.text-center').css({
					width: '0'
				});
				$('.lan > ul > li').css({
					background: 'transparent'
				});
			}
		});
	});

	//----light box----//
	
	$('.light-box').click(function(){                      //show lightbox
		$(this).hide();
	});
	
	$('.portfolio > .col.m3 > .border').click(function(){  //close lightbox
		//console.log($(this).children().children().attr('src'))
		$('.box > .border > .text-center > img').attr('src', $(this).children().children().attr('src'));
		//console.log($(this).parent().index());
		console.log(portfolioHelpArr[$(this).parent().index()].name);
		$('.light-box > .box > .border > .title').text(portfolioHelpArr[$(this).parent().index()].name);
		$('.light-box > .box > .border > .des').text(portfolioHelpArr[$(this).parent().index()].des);
		$('.light-box').fadeToggle();
		//onsole.log($('.box > .border > .text-center > img').prop('offsetHeight'));
		if($('.box > .border > .text-center > img').prop('offsetHeight') > 780){
			$('.box > .border > .text-center > img').attr('width', '40%');
		};
	});
	//----------------//


	function changeExp(liName,contentName,clickObj){
		var index = $(liName + '> ul.opt > li').index(clickObj) + 1;
		var delayTime = ($(contentName + ':nth-child(' + index + ')').is(':hidden')) ? 502 : 0;
		$(contentName).fadeOut(500);
		$(contentName + ':nth-child(' + index + ')').delay(delayTime).fadeIn(500);
		$(liName + '>ul.opt>li').removeClass('active');
		$(liName + '>ul.opt>li:nth-child(' + index + ')').addClass('active');
	}

	/* ---- 載入動畫效果 ---- */
	$('.header').css({
		margin: '8% 0 0 0',
		opacity: '100'
	});
	$('.load-ani-left').css({
		opacity: '100'
	});
	$('.content.prev-page').delay(2000).queue(function(next){  //翻頁效果
		$(this).removeClass('prev-page');
		$(this).addClass('next-page');
		next();
	});
	$('.print').delay(3000).queue(function(next){
		$(this).css({
			opacity: '1',
			margin: '2em 0'
		});
	});
	/* ---------------------- */

	$('.go-top').click(function(){
		$("html,body").animate({
		    scrollTop: 0
		},800);
		return false;
	});

	//技能圓點動畫 - 手機板
	if($(window).width() <= 768){
		var skillCount = $('.skill').length;
		var delayTime = 0;
		for(i = 1 ; i <= skillCount ; ++i){
			$('.skill:nth-child(' + i + ') > .level > .curr.text-center').css({
				width: $('.skill:nth-child(' + i + ') > .level > .curr.text-center').text()
			});
		}

		for(j = 1 ; j <= $('.lan').length ; ++j){
			for(k = 1 ; k <= $('.lan:nth-child(' + j + ') > ul').attr('data-level') ; ++k){
				delayTime += 120; 
				/*$('.lan:nth-child(' + j + ') > ul > li:nth-child(' + k + ')').css({
					background: 'red'
				});*/
				$('.lan:nth-child(' + j + ') > ul > li:nth-child(' + k + ')').delay(delayTime).queue(function(next){
					$(this).css({
						background: '#fbd341'
					});
					next();
				});
			}
		}
	}else{
		$('.skill > .level > .curr.text-center').css({
			width: '0'
		});
		$('.lan > ul > li').css({
			background: 'transparent'
		});
	}

	$('.print').click(function(){
		//$("<a>").attr("href", src).attr("download", "filename").appendTo("body").click().remove();
		var a = $("<a></a>").attr("href", 'img').attr("download", 'self.png').appendTo("body");
	    a[0].click();
	    a.remove();
	});
});

//輸釘圖片固定位置
$(window).resize(function(){
	$('img.tag').css({
		marginLeft: ($('.self').width() / 2) - 40
	});

});


$(window).scroll(function(){
	if($(window).scrollTop() > '100'){
		$('.go-top').css({
			bottom: '2em',
			opacity: '1'
		});
	}else{

		$('.go-top').css({
			bottom: '-50em',
			opacity: '0'
		});
	}
});