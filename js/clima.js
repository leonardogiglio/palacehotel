window.addEventListener('load', () =>{
  let longitud;
  let latitud;

  let temperaturaValor = document.getElementById('temperatura-valor');
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion');
  let ubicacion = document.getElementById('ubicacion');
  let iconoAnimado = document.getElementById('icono-animado');
  let vientoVelocidad = document.getElementById('viento-velocidad');
  
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
          longitud = posicion.coords.longitude;
          latitud = posicion.coords.latitude;

          const urlCiudad = `https://api.openweathermap.org/data/2.5/weather?q=CARILO&lang=es&units=metric&appid=1dbc25d33a0bd36dbc0c540b52b853a7`
        
         fetch(urlCiudad)
         .then(response => {return response.json()})
         .then(data => {
          console.log(data.main.temp);
           let temp = Math.round(data.main.temp);
           temperaturaValor.textContent = `${temp} ºC`;

           let descripcion = data.weather[0].description;
           temperaturaDescripcion.textContent = descripcion.toUpperCase();

           ubicacion.textContent = data.name;
           vientoVelocidad.textContent = `${data.wind.speed} m/s`

           console.log(data.weather[0].main);
           switch(data.weather[0].main){
            case 'Clouds':
              iconoAnimado.src = './icons/cloudy-day-1.svg';
              console.log('Nublado');
            break;
            case 'Clear':
              iconoAnimado.src = './icons/day.svg';
              console.log('Despejado');
            break;
            case 'Thunderstorm':
              iconoAnimado.src = './icons/thunder.svg';
              console.log('Tormenta');
            break;
            case 'Drizzle':
              iconoAnimado.src = './icons/rainy-2.svg';
              console.log('Llovizna');
            break;
            case 'Rain':
              iconoAnimado.src = './icons/rainy-7.svg';
              console.log('Lluvia');
            break;
            case 'Atmosphere':
              iconoAnimado.src = './icons/weather.svg';
              console.log('Húmedo');
            break;
           }

         })
         .catch (error => {
          console.log(error);
         })
        })
          
    }
})