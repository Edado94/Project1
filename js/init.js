(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// Dropdown button
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();


  // Today's date
  var todaysDate = new Date();
  var todayMonth = todaysDate.getMonth() + 1;
  var todayDay = todaysDate.getDate();
  var todayYear = todaysDate.getFullYear();
  document.getElementById("todays-date").innerHTML= `${todayMonth}/${todayDay}/${todayYear}`;


  /*Function for horoscope sign description API
  fetch("https://horoscope5.p.rapidapi.com/general/daily?sign=cancer&date=2020-05-02", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fb68ac8d4amsh1eca1b85f9676c3p16272djsnfef6754291a6",
		"x-rapidapi-host": "horoscope5.p.rapidapi.com"
	}
})
  .then(function(response) {

    const data =  response.json();
    data.then(res => {
      console.log(res.result.description);
      document.getElementById('sign-description').innerHTML= res.result.description;
    })

  })
  .then(function(response) {
    console.log(response);
  }); 



// Function for adding the Giphy API
  function giphyLeo() {
    var giphyLeo = document.querySelector('#giphyLeo').value;
  
    fetch(
      'https://api.giphy.com/v1/gifs/search?q=' +
        'leo' +
        '&api_key=LFR5Bj92lwn7G43jEuUV0n7MPc8tI1LE'
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response.data[0]);

        var responseContainerEl = document.querySelector('#response-container');
  
        responseContainerEl.innerHTML = '';
  
        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
  
        // Append 'gifImg' to the <div>
        responseContainerEl.appendChild(gifImg);
      });
  }
  giphyLeo();

    // Function for Health by API

    fetch("https://horoscope5.p.rapidapi.com/health/daily?sign=cancer&date=2020-05-02", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "fb68ac8d4amsh1eca1b85f9676c3p16272djsnfef6754291a6",
        "x-rapidapi-host": "horoscope5.p.rapidapi.com"
      }
    })
      .then(function(response) {
    
        const data =  response.json();
        data.then(res => {
          console.log(res.result.description);
          document.getElementById('your-health').innerHTML= res.result.description;
        })
    
      })
      .then(function(response) {
        console.log(response);
      }); */

        