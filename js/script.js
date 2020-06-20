$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		adaptiveHeight: true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		],
		appendDots:$('.dots-container')
	});
});

function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();



