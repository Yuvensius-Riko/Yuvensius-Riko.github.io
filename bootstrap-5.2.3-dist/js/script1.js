const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})

// paralax
// about
$(window).on('load', function(){
	$('.about .tentang').addClass('Tmuncul');
	$('.about .satu').addClass('ada');
	$('.about .pKiri').addClass('pMuncul');
	$('.about .pKanan').addClass('pMuncul');
});




$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.sasuke img').css({
		'transform' : 'translate(0px, '+ wScroll/4+'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2+'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll+'%)'
	});

	//portofolio
 	if( wScroll > $('.portofolio').offset().top -200 ) {
 		$('.portofolio .thumbnail').each(function(i) {
 			setTimeout(function() {
 				$('.portofolio .thumbnail').eq(i).addClass('muncul');
 			}, 500 * i);


 		});


 		
 	}

});