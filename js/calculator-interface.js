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
		$('.ageInSec').text(ageInSec);
		
	});
});