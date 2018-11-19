let selected      = document.querySelector('.day__block--selected');
let days          = document.querySelectorAll('.day__block');
let temperature   = document.querySelector('.weather-temp--today');
let wind          = document.querySelector('#wind-speed');
let humidity      = document.querySelector('#humidity');
let description   = document.querySelector('#weather-description');
let place         = document.querySelector('#weather-location');
let icon          = document.querySelector('.weather__icon--today');


let root   = 'https://api.openweathermap.org';
let apiKey = 'fbd1d45093c06868c8295c672935d622';
let path   = 'data/2.5/weather';
let city   = 'London';

/*TEMPERATURE*/

axios.get(root + '/' + path + '?q=' + city + '&appid=' + apiKey + '&units=metric')
  .then(function(response) {

    temperature.innerHTML = Math.round(response.data.main.temp); 
    console.log(response);
    });
 
/*PLACE
    axios.get(root + '/' + path + '?q=' +city + '&units=metric'+'&APPID=' + apiKey)
  .then(function(response) {

    place.innerHTML = Math.round(response.data.main.temp_min); 
    console.log(response);
    });*/


 /*ICON*/   
    axios.get(root + '/' + path + '?q=' +city + '&units=metric'+'&APPID=' + apiKey)
    .then(function(response) {
        icon.innerHTML = Math.round(response.data.weather[0].icon.slice(0, 2)); 
        /*console.log(response);*/
        });

/*WIND*/
    
        axios.get(root + '/' + path + '?q=' +city + '&units=metric'+'&APPID=' + apiKey)
    .then(function(response) {
        wind.innerHTML = Math.round(response.data.wind.speed); 
        console.log(response);
        });


/*HUMIDITY*/
        axios.get(root + '/' + path + '?q=' +city + '&units=metric'+'&APPID=' + apiKey)
    .then(function(response) {
        humidity.innerHTML = Math.round(response.data.main.humidity); 
        console.log(response);
        }); 

        
        






// function refreshTemp(event) {
//   todayTemp.innerHTML = event.currentTarget.getAttribute('max');
//   document.querySelector('.day__block--selected').classList.remove('day__block--selected');
//   event.currentTarget.classList.add('day__block--selected');

//   let iconPath = 'images/' + event.currentTarget.getAttribute('conditions') + '.png'
//   todayIcon.setAttribute('src', iconPath);
// };

// days.forEach(function(day, index) {
//   day.addEventListener('click', refreshTemp);
// });
