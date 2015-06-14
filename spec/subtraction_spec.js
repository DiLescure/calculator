describe('Subtraction function', function(){
	it('accepts two parameters', function(){
		var error_message = '';
		try{
			subtraction();
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('Parameter "a" not set!');

		error_message = '';
		try{
			subtraction(1);
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('Parameter "b" not set!');


		error_message = '';
		try{
			subtraction(1, 1);
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('');
	});

	it('should subtract two numbers together', function(){
		var result = subtraction(5,3);

		expect(result).toBe(2);
	});
});