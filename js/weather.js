function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log('You live in ', lat, lng);
}
function onGeoError() {
  alert("Can't Find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
