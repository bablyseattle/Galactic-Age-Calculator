import { Calculator } from './../js/calculator.js'

describe('Calculator', function(){
	let mycalculator;
	beforeEach(function(){
		 mycalculator = new Calculator()
	});

	it('should calculate age in seconds', function(){
		expect(mycalculator.ageInSeconds(1)).toEqual(31536000)
	});
});