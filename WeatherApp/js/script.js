const API_KEY = 'dccbf5e723c2f71607f4a80bdf256bc7';
const raw = `<span class="weather-description">{{weather.0.main}} ( {{weather.0.description}} )</span>
		  <hr>
		  <span class="country">Country: {{sys.country}}</span>
		  <hr>
		  <span class="city">City of {{name}}</span>
		  <hr>
		  <div class="temperature-icon">
			<span class="temperature">{{main.temp}} &#8451;</span>
			<img id="icon" src="http://openweathermap.org/img/w/{{weather.0.icon}}.png">
		  </div>`;
let template = Handlebars.compile(raw);

function registerEventHandlers() {
	$('#getWeather').on('click', displayData);

	$('#userCity').on('keypress', e => {
		if (e.which === 13) {
			displayData();
		}
	});
}

function handleError(xhr) {
	$("#message").html(xhr.responseJSON.message);
}

function weatherSuccess(data) {
	data.main.temp = data.main.temp.toFixed(1); // round the temp
	let html = template(data);
	$("#message").html(html);
}

function displayData() {
	function urlByCity(city) {
		return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
	}

	let $cityInput = $('#userCity');
	let userCity = $cityInput.val();
	if (!userCity) {
		return;
	}
	$cityInput.val('');
	$.get(urlByCity(userCity)).then(weatherSuccess, handleError);
}

$(document).ready(function() {
	$.getJSON('http://ip-api.com/json').then(ip => {
		let url = `http://api.openweathermap.org/data/2.5/weather?lat=${ip.lat}&lon=${ip.lon}&appid=${API_KEY}&units=metric`;
		return $.getJSON(url);
	}).then(weatherSuccess, handleError);

	registerEventHandlers();
});
