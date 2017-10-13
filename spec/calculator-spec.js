import { Calculator } from './../js/calculator.js'

describe('Calculator', function(){
	let mycalculator;
	beforeEach(function(){
		 mycalculator = new Calculator()
	});

	it('should calculate age in seconds', function(){
		expect(mycalculator.ageInSeconds(1)).toEqual(31536000)
	});

	it('should calculate difference in date', function(){
		expect(mycalculator.dateDifference("11/05/1992", "10/13/2017")).toEqual(786927600)
	});
});