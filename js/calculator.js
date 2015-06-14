function addition(a, b) {

	if(typeof a === 'undefined'){
		throw new Error('Parameter "a" not set!');
	}
	if(typeof b === 'undefined'){
		throw new Error('Parameter "b" not set!');
	}
	return a + b;

}
