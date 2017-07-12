var indexSlider = 1;
showDivs(indexSlider);

var btnleft = document.getElementById('btnleft');
var btnright = document.getElementById('btnright');

function plusDivs(n) {
	showDivs(indexSlider += n);
}
function showDivs(n) {
	var i;
	var images = document.getElementsByClassName('gallerySlide');

	if (n > images.length) { indexSlider = 1}
	if (n < 1) {indexSlider = images.length}

	for (var i = 0; i < images.length; i++) {
		images[i].style.display = 'none';
	}

	images[indexSlider-1].style.display= 'block';
}

btnleft.addEventListener('click', function(){
	plusDivs(-1);
});

btnright.addEventListener('click', function(){
	plusDivs(1);
});


$(function() {
	$.fn.scrollToTop=function(){
		$(this).hide().removeAttr("href");
		if($(window).scrollTop()!="0"){
			$(this).fadeIn("slow")
		}
		var scrollDiv=$(this);
		$(window).scroll(function(){
			if($(window).scrollTop()=="0"){
				$(scrollDiv).fadeOut("slow")
			}else {
				$(scrollDiv).fadeIn("slow")
			} 
		});
		$(this).click(function(){
			$("html, body").animate({scrollTop:0},"slow")
		});
	};
});
        
$(function(){
	$("#toTop").scrollToTop();
});