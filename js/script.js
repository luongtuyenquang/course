$(window).on('load',function(event){
	$('body').removeClass('preloading');
	$('#circle').delay(2500).fadeOut('fast');
	$('#wrap').delay(2500).fadeOut('fast');

});
$(function(){
	//Biến chiều cao khi kéo xuống sẽ hiện nút
	var offset=200,
	//Biến khoảng cách nút sẽ mờ đi
	scroll_opacity=500,
	//Khoảng thời gian kéo dài lên tóp
	scroll_duration=700,
	//Gán DOM vào biến
	$back_to_top = $('.back-to-top');
	//Thêm class để nút hiện lên
	$(window).scroll(function(){
	($(this).scrollTop > offset) ? $back_to_top.addClass('visible'):$back_to_top.removeClass('visible fade-out');
	if ($(this).scrollTop() > scroll_opacity) {
		$back_to_top.addClass('fade-out');
	}

});	
	$back_to_top.on('click',function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:0},scroll_duration);
	});
})();
