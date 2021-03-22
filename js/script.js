$(document).ready(function(){
    $(".menu, .menu-tel").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: ... мс
        $('body,html').animate({scrollTop: top}, 800);
   		 });
		});

	// Убираем классы для меню

		$('.menu-tel a').on("click", function() {
		$('.burger').removeClass('menu-btn-active')
		$('.menu-tell').removeClass('menu-tell-active')
		$('body').removeClass('body-active')
		$('.burger-1').removeClass('burger-1-active')
		$('.burger-2').removeClass('burger-2-active')
		$('.burger-3').removeClass('burger-3-active')

	// Добавляем классы для меню

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