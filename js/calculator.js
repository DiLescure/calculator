function addition(a, b) {

	if(typeof a === 'undefined'){
		throw new Error('Parameter "a" not set!');
	}
	if(typeof b === 'undefined'){
		throw new Error('Parameter "b" not set!');
	}


	return a + b;

}

function subtraction(a, b) {

	if(typeof a === 'undefined'){
		throw new Error('Parameter "a" not set!');
	}
	if(typeof b === 'undefined'){
		throw new Error('Parameter "b" not set!');
	}


	return a - b;

}

function division(a, b) {

	if(typeof a === 'undefined'){
		throw new Error('Parameter "a" not set!');
	}
	if(typeof b === 'undefined'){
		throw new Error('Parameter "b" not set!');
	}
	if(b === 0){
		throw new Error('Not even God can divide by 0!');
	}
	return a / b;

}
function multiplication(a, b) {

	if(typeof a === 'undefined'){
		throw new Error('Parameter "a" not set!');
	}
	if(typeof b === 'undefined'){
		throw new Error('Parameter "b" not set!');
	}
	return a * b;
}