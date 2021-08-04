var signs = [];
// var searchTerm = 'scorpio';

// (function($){
//   $(function(){

//     $('.sidenav').sidenav();
//     $('.parallax').parallax();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

function myFunction() {
	var searchTerm = document.getElementById('download-button').value;
	console.log(searchTerm);
	fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + searchTerm + "&day=today", {
		"method": "POST",
		"headers": {
			"x-rapidapi-key": "fb68ac8d4amsh1eca1b85f9676c3p16272djsnfef6754291a6",
			"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
		}
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);
		var compatibility = data.query.searchTerm.compatibility;
		console.log(compatibility);
		var horoscopes = document.getElementById('horoscopes').value;
	});
}






