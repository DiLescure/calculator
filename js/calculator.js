function addition(a, b) {

	if(typeof a === 'undefined'){
		throw new Error('Parameter "a" not set!');
	}
	if(typeof b === 'undefined'){
		throw new Error('Parameter "b" not set!');
	}

	a = new Big(a);

	return Number(a.plus(b).toPrecision(10));

}

function subtraction(a, b) {

	if(typeof a === 'undefined'){
		throw new Error('Parameter "a" not set!');
	}
	if(typeof b === 'undefined'){
		throw new Error('Parameter "b" not set!');
	}

	a = new Big(a);

	return Number(a.minus(b).toPrecision(10));

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

	a = new Big(a);

	return Number(a.div(b).toPrecision(10));

}

function multiplication(a, b) {

	if(typeof a === 'undefined'){
		throw new Error('Parameter "a" not set!');
	}
	if(typeof b === 'undefined'){
		throw new Error('Parameter "b" not set!');
	}

	a = new Big(a);

	return Number(a.times(b).toPrecision(10));

}