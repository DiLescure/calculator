describe('Multiplication function', function(){
	it('accepts two parameters', function(){
		var error_message = '';
		try{
			multiplication();
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('Parameter "a" not set!');
		error_message = '';
		try{
			multiplication(1);
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('Parameter "b" not set!');
	});
});