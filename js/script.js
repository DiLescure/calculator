var CalcState = function(){
	this.clear = function(){
		this.right_val = 0;
		this.left_val = 0;
		this.operator = '';

	};
	this.clear();
};
$(function () {
	var calc_state = new CalcState();
	$('button').click(function(ev){
		ev.preventDefault();
		var button_val = $(ev.target).html();
		if(/\d/.test(button_val)){
			
			calc_state.left_val *= 10;
			if($('#screen').html().length > 9){
				calc_state.left_val /= 10;
			}else{
				calc_state.left_val += parseInt(button_val);
			}
			
		}else if(button_val === 'clear'){
			calc_state.clear();
		}
		$('#screen').html(calc_state.left_val);
	});
});