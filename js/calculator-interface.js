import { Calculator } from './../js/calculator.js'

$(document).ready(function(){
	var mycal = new Calculator();
	$('#birthday').submit(function(e){
		e.preventDefault();
		let month = $('#month').val();
		let day = $('#day').val();
		let year = $('#year').val();
		let birthday = month + "/" +day + "/" +year ;
		let today = new Date().toISOString().slice(0, 10);
		let ageInSec = mycal.dateDifference(birthday, today);
		let age = mycal.dateDifferenceInYear(birthday, today);
		$('.age').text(age);
		$('.ageInSec').text(ageInSec);
		$('.ageInMercury').text(mycal.ageInMercury(age));
		$('.ageInMars').text(mycal.ageInMars(age));
		$('.ageInVenus').text(mycal.ageInVenus(age));
		$('.ageInJupitor').text(mycal.ageInJupitor(age));

		$('.leftInMercury').text(mycal.yearsleft(age, "mercury"));
		$('.leftInEarth').text(mycal.yearsleft(age, "earth"));
		$('.leftInMars').text(mycal.yearsleft(age, "mars"));
		$('.leftInVenus').text(mycal.yearsleft(age, "venus"));
		$('.leftInJupitor').text(mycal.yearsleft(age, "jupitor"));
		

	});
});