describe('Division function', function(){
	it('accepts two parameters', function(){
		var error_message = '';
		try{
			division();
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('Parameter "a" not set!');

		error_message = '';
		try{
			division(1);
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('Parameter "b" not set!');


		error_message = '';
		try{
			division(1, 1);
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('');
	});

	it('should divide two numbers together', function(){
		var result = division(4,2);

		expect(result).toBe(2);
	});

	it('should throw an error when dividing by 0', function(){
		var error_message = '';
		try{
			division(1, 0);
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('Not even God can divide by 0!');
	});
});