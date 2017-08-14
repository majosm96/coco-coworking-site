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
	if(count == 1){
		count=4;
		colors();
	} else {
		count-=1;
		colors();	
	}
	
});

btnright.addEventListener('click', function(){
	plusDivs(1);
	if(count == 4){
		count=1;
		colors();
	} else {
		count+=1;
		colors();	
	}
});


var count = 0;

function colors() {

	switch (count) {
		case 1 : 
			document.getElementById('image4').classList.remove('main-laCasa_colores');
			document.getElementById('image3').classList.remove('main-laCasa_colores');
			document.getElementById('image2').classList.remove('main-laCasa_colores');
			document.getElementById('image1').classList.add('main-laCasa_colores');
			break;
		case 2:
			document.getElementById('image4').classList.remove('main-laCasa_colores');
			document.getElementById('image3').classList.remove('main-laCasa_colores');
			document.getElementById('image2').classList.add('main-laCasa_colores');
			document.getElementById('image1').classList.remove('main-laCasa_colores');
			break;
		case 3:
			document.getElementById('image4').classList.remove('main-laCasa_colores');
			document.getElementById('image3').classList.add('main-laCasa_colores');
			document.getElementById('image2').classList.remove('main-laCasa_colores');
			document.getElementById('image1').classList.remove('main-laCasa_colores');
			break;
		case 4:
			document.getElementById('image4').classList.add('main-laCasa_colores');
			document.getElementById('image3').classList.remove('main-laCasa_colores');
			document.getElementById('image2').classList.remove('main-laCasa_colores');
			document.getElementById('image1').classList.remove('main-laCasa_colores');
			break;
	}
}


/************************************* Jquery*******************************/

/***
* This function make a jump to section in the OnePage and 
* the arrow faceOut and FadeIn with an effect slow
***/

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



$(function(){
	var $gallery = $('.gallery a').simpleLightbox();

	$gallery.on('show.simplelightbox', function(){})
	.on('shown.simplelightbox', function(){})
	.on('close.simplelightbox', function(){})
	.on('closed.simplelightbox', function(){})
	.on('change.simplelightbox', function(){})
	.on('next.simplelightbox', function(){})
	.on('prev.simplelightbox', function(){})
	.on('nextImageLoaded.simplelightbox', function(){})
	.on('prevImageLoaded.simplelightbox', function(){})
	.on('changed.simplelightbox', function(){})
	.on('nextDone.simplelightbox', function(){})
	.on('prevDone.simplelightbox', function(){})
	.on('error.simplelightbox', function(e){});
});


