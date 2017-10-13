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

	it('should calculate age in mercury', function(){
		expect(mycalculator.ageInMercury(25)).toEqual(6)
	});

	it('should calculate age in Venus', function(){
		expect(mycalculator.ageInVenus(25)).toEqual(15.5)
	});
});