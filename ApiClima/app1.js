const UrlBase = "https://api.openweathermap.org/data/2.5/weather";
const ApiKey = "f19ef836f2245588afe6d3dd48be83e8";
const btnCiudad = document.querySelector('#btnCiudad');
const inputCity = document.querySelector('#city');

const fetchApi = url => fetch(url).then(Response => Response.json());

async function getClima(lat, lon, apiKey){
    const url = `${ UrlBase }?lat=${ lat }&lon=${ lon}&appid=${ apiKey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature =(clima.main.temp - 273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML = clima.name;
    pintaTemp(temperature);
    pintaFondo (temperature);
}

async function getClimaByCity(city, apikey){
    const url = `${ UrlBase }?q=${ city }&appid=${ apikey}`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature =(clima.main.temp - 273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML = clima.name;
    pintaTemp(temperature);
    pintaFondo (temperature);
}

function pintaTemp(temp){
    const h3 = document.querySelector('h3');
    if (temp < 15){
        h3.innerHTML=`${temp}°C, ❄️❄️❄️`;
    } else if (temp < 23){
        h3.innerHTML = `${ temp }°C*🌤️*🌤️`;
    }else{
        h3.innerHTML = `${ temp }°C🥵🥵🥵`;
    }
}

function pintaFondo (temp){
    const fondo = document.querySelector('body');
    if (temp < 10){
        fondo.style.background= '#a8f3da';
    } else if (temp < 20){
        fondo.style.background= 'yellow';
    }else {
        fondo.style.background= 'rgb (FF,255,189,127';
    }
}
navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon, ApiKey);
    }
)

btnCiudad.addEventListener('click', () =>{
    const city = inputCity.value;
    if (city){
        getClimaByCity(city, ApiKey);
    }
})