const API_KEY = 'a8661d34cb361bc449ae3b85f9c1d91b';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}℃`;
    });
}
function onGeoError() {
  alert("Can't Find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
