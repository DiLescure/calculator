describe('Subtraction function', function(){
	it('accepts two parameters', function(){
		var error_message = '';
		try{
			subtraction();
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('Parameter "a" not set!');
	});
});