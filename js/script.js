var CalcState = function(){
	this.clear = function(){
		this.right_val = new Big(0);
		this.left_val = new Big(0);
		this.operator = '';
		this.decimal = false;
		this.decimal_place = 10;
	};
	this.clear();
};
$(function () {
	var calc_state = new CalcState();
	$('button').click(function(ev){
		ev.preventDefault();
		var button_val = $(ev.target).html();
		if(/\d/.test(button_val)){
			button_val = new Big(button_val);
			if(calc_state.decimal === false){
				calc_state.left_val = calc_state.left_val.times(10);
				if($('#screen').html().length > 9){
					calc_state.left_val= calc_state.left_val.div(10);
				}else{
					calc_state.left_val = calc_state.left_val.plus(Number(button_val.toPrecision(2)));
			}
			}else if($('#screen').html().length < 10){
				button_val = button_val.div(calc_state.decimal_place);
				calc_state.decimal_place *= 10;
				calc_state.left_val = calc_state.left_val.plus(Number(button_val.toPrecision(2)));
			}
		}else if(button_val === 'clear'){
			calc_state.clear();
		}else if(button_val === '.'){
			calc_state.decimal = true;
		}
		$('#screen').html(Number(calc_state.left_val.toPrecision(2)));
	});
});