$(function () {
	$('button').click(function(ev){
		ev.preventDefault();
		var button_val = $(ev.target).html();
		$('#screen').html(button_val);
	});
});