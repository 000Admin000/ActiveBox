$(document).ready(function(){
    $(".menu, .menu-tel").on("click","a", function (event) {

        event.preventDefault();
 
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 800);
   		 });
		});

		$('.menu-tel a').on("click", function() {
		$('.burger').removeClass('menu-btn-active')
		$('.menu-tell').removeClass('menu-tell-active')
		$('body').removeClass('body-active')
		$('.burger-1').removeClass('burger-1-active')
		$('.burger-2').removeClass('burger-2-active')
		$('.burger-3').removeClass('burger-3-active')


		$('.burger').on('click', function(e){
		e.preventDefault;
		$(this).toggleClass('menu-btn-active')
		$('.menu-tell').toggleClass('menu-tell-active')
		$('body').toggleClass('body-active')
		$('.burger-1').toggleClass('burger-1-active')
		$('.burger-2').toggleClass('burger-2-active')
		$('.burger-3').toggleClass('burger-3-active')
	});
})
