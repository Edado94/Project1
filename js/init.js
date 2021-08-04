// (function($){
//   $(function(){

//     $('.sidenav').sidenav();
//     $('.parallax').parallax();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

function myFunction() {
	var searchTerm = document.getElementById('download-button').value;
	console.log(searchTerm);
	fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + searchTerm + "&day=today" + "&data=compatability", {
		"method": "POST",
		"headers": {
			"x-rapidapi-key": "fb68ac8d4amsh1eca1b85f9676c3p16272djsnfef6754291a6",
			"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
		}
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			// console.log(data.compatibility);
			var compatibility = data.compatibility;
			var description = data.description;
			var dateRange = data.date_range;
			// console.log(compatibility);
			// console.log(description);
			// console.log(dateRange);
			// document.
		})

	fetch(
		"http://api.giphy.com/v1/gifs/search?q=horoscope+sign" + searchTerm +  
		"&title=" + "horoscope+sign"+ searchTerm 
		+ "&api_key=LFR5Bj92lwn7G43jEuUV0n7MPc8tI1LE&limit=5"
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			var imageEl = data.data[2].embed_url;
			console.log(imageEl);
		})
}
