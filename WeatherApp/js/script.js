const API_KEY = 'dccbf5e723c2f71607f4a80bdf256bc7';
const htmlCelsius = '&#8451;';

function kelToCel(k) {
  return (k - 273.15).toFixed(1);
}

function handleError(xhr, state, error) {
  console.error(arguments);
}

function weatherSuccess(data) {
  var temperature = data.main.temp; // kelvin
  var theWeather = data.weather[0].main;
  var description = data.weather[0].description;
  var country = data.sys.country;
  var city = data.name;
  var icon = data.weather[0].icon;
  var iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';

  $('span.weather-description').html(theWeather + ' ( ' + description + ' )');
  $('span.country').html('Country: ' + country);
  $('span.city').html('City of ' + city);
  $('span.temperature').html(kelToCel(temperature) + htmlCelsius);
  $('#icon').attr('src', iconUrl);
}

function displayData() {
    var urlByCity = function(city) {
      var base = 'http://api.openweathermap.org/data/2.5/weather?q=';
      return base + city + '&appid=' + API_KEY;
    };

    var userCity = $('#userCity').val();
    $.get(urlByCity(userCity)).then(weatherSuccess, handleError);
  }

$(document).ready(function() {
  $.get('http://ip-api.com/json').then(function(ipJSON) {
    var lat = ipJSON.lat;
    var lon = ipJSON.lon;
    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
      lat + '&lon=' + lon + '&appid=' + API_KEY;
    return $.get(requestUrl);
  }).then(weatherSuccess, handleError);
  
  $('#getWeather').click(displayData);
  
  $('#userCity').keypress(function(e) {
    if (e.which == 13)
        displayData();
  });
});
