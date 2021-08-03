(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=taurus&day=today", {
	"method": "POST",
	"headers": {
		"x-rapidapi-key": "fb68ac8d4amsh1eca1b85f9676c3p16272djsnfef6754291a6",
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});