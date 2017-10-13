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
}