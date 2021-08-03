(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space



// function fetchApi() {
//   fetch("https://horoscope5.p.rapidapi.com/general/daily?sign=cancer&date=2020-05-02", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "fb68ac8d4amsh1eca1b85f9676c3p16272djsnfef6754291a6",
// 		"x-rapidapi-host": "horoscope5.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// }

$.getJSON(
  "https://horoscope5.p.rapidapi.com/general/daily?sign=cancer&date=2020-05-02",
  function(data) {
    console.log(data);
  }
);
