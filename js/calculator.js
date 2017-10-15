export class Calculator{
	constructor(){

	}

	
	ageInSeconds(ageInYears){
		const daysInYear = 365;
		const hoursInDay = 24;
		const secondsInHour = 3600;

		let seconds = ageInYears * daysInYear * hoursInDay * secondsInHour;
		return seconds;
	}

	dateDifference(startDate, endDate){
		let day_start = new Date(startDate);
		let day_end = new Date(endDate);
		let differenceInMS = day_end - day_start;
		let differenceInSec = differenceInMS/1000;	
		return differenceInSec;
	}

	dateDifferenceInYear(startDate, endDate){
		let secs = this.dateDifference(startDate, endDate);
		let years = secs / (365 * 24 * 3600);
		years = Math.floor(years)
		return years; 

	}

	ageInMercury(ageAtEarth){
		let age = ageAtEarth * 0.24;
		return age;
	}

	ageInVenus(ageAtEarth){
		let age = ageAtEarth * 0.62;
		return age;
	}

	ageInMars(ageAtEarth){
		let age = ageAtEarth * 1.88;
		return age;
	}

	ageInJupitor(ageAtEarth){
		let age = ageAtEarth * 11.86;
		return age;
	}
	lifeExpectancy(planet){
		let life = 0;
		var that = this;
		if (planet == "earth")
			 life = 72;
		else if (planet == "mercury")
			life = that.ageInMercury(72)
		else if (planet == "venus")
			life = that.ageInVenus(72)
		else if (planet == "mars")
			life = that.ageInMars(72)
		else if (planet == "jupitor")
			life = that.ageInJupitor(72)

		return life;
	}

	yearsleft(age, planet){
		let years = 0;
		years = this.lifeExpectancy(planet) - age;
		return years;
	}


}