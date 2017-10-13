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
}