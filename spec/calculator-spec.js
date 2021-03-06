import { Calculator } from './../js/calculator.js'

describe('Calculator', function(){
	let mycalculator;
	beforeEach(function(){
		 mycalculator = new Calculator()
	});

	it('should calculate age in seconds', function(){
		expect(mycalculator.ageInSeconds(1)).toEqual(31536000)
	});

	it('should calculate date difference in seconds', function(){
		expect(mycalculator.dateDifference("11/05/1992", "10/13/2017")).toEqual(786927600)
	});

	it('should calculate date difference in years', function(){
		expect(mycalculator.dateDifferenceInYear("11/05/1992", "10/13/2017")).toEqual(24)
	});

	it('should calculate age in mercury', function(){
		expect(mycalculator.ageInMercury(25)).toEqual(6)
	});

	it('should calculate age in Venus', function(){
		expect(mycalculator.ageInVenus(25)).toEqual(15.5)
	});

	it('should calculate age in Mars', function(){
		expect(mycalculator.ageInMars(25)).toEqual(47)
	});

	it('should calculate age in Jupitor', function(){
		expect(mycalculator.ageInJupitor(25)).toEqual(296.5)
	});
});