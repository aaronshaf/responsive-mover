$(window).on('load resize',function(){
	$('.responsive-move').each(function(){
		var secondaryContainer = $(this).data('secondary-container');
		var minWidth = $(this).data('data-min-width') || 768;
		console.log($(window).width());
		if($(window).width() >= minWidth) {
			$('#' + secondaryContainer).children().appendTo($(this));
		} else {
			$(this).children().appendTo($('#' + secondaryContainer))
		}
	});
});