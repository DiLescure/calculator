describe('Addition function', function(){
	it('accepts two parameters', function(){
		var error_message = '';
		try{
			addition();
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('Parameter "a" not set!');

		error_message = '';
		try{
			addition(1);
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('Parameter "b" not set!');


		error_message = '';
		try{
			addition(1, 1);
		}catch(e){
			error_message = e.message;
		}

		expect(error_message).toBe('');
	});

	it('should add two numbers together', function(){
		var result = addition(2,3);

		expect(result).toBe(5);
	});
});