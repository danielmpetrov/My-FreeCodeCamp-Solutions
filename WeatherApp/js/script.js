const API_KEY = 'dccbf5e723c2f71607f4a80bdf256bc7';

function handleError(xhr, state, error) {
  $("#message").html("Whoops... an error :(");
}

function weatherSuccess(data) {
  data.main.temp = data.main.temp.toFixed(1); // round the temp
  var source = $("#weather-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $("#message").html(html);
}

function displayData() {
  var urlByCity = function(city) {
    var base = 'http://api.openweathermap.org/data/2.5/weather?q=';
    return base + city + '&appid=' + API_KEY + '&units=metric';
  };

  var $cityInput = $('#userCity');
  var userCity = $cityInput.val();
  $cityInput.val('');
  $.get(urlByCity(userCity)).then(weatherSuccess, handleError);
}

$(document).ready(function() {
  $.get('http://ip-api.com/json').then(function(ipJSON) {
    var lat = ipJSON.lat;
    var lon = ipJSON.lon;
    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
      lat + '&lon=' + lon + '&appid=' + API_KEY + '&units=metric';
    return $.get(requestUrl);
  }).then(weatherSuccess, handleError);
  
  $('#getWeather').click(displayData);
  
  $('#userCity').keypress(function(e) {
    if (e.which == 13) {
      displayData();
    }
  });
});
