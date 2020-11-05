// Bogotá

let nombreBog = document.getElementById("name-bog");
let temperaturaBog = document.getElementById("temp-bog");
let descripcionBog = document.getElementById("descrip-bog");
let iconosBog = document.getElementById("ico-bog");

fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Bogotá&appid=ce7af53208c50d2cc85f3f0f0460856d"
  )
    .then((response) => response.json())
    .then((data) => {
      let nameBog = data.name;
    //   console.log(nameBog);
      nombreBog.innerHTML = nameBog;
  
      let temperatureBog = data.main.temp;
    //   console.log(temperaturaBog);
      // Cambio de grados Kelvin a Centigrados
      temperatureBog = (temperatureBog - 273.15); 
      temperaturaBog.innerHTML = `Temperatura Actual: ${temperatureBog.toFixed()} °C`;
  
      let descriptionBog = data.weather[0].description;
    //   console.log(descripcionBog);
      descripcionBog.innerHTML = descriptionBog;
  
      let iconsBog = data.weather[0].icon;
    //   console.log(iconsBog);
      iconosBog.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconsBog}@2x.png"/>`;
    });

 // Paris
  
 let nombrePar = document.getElementById("name-par");
 let temperaturaPar = document.getElementById("temp-par");
 let descripcionPar = document.getElementById("descrip-par");
 let iconosPar = document.getElementById("ico-par");

 fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=ce7af53208c50d2cc85f3f0f0460856d"
  )
    .then((response) => response.json())
    .then((data) => {
      let namePar = data.name;
      nombrePar.innerHTML = namePar;
  
      let temperaturePar = data.main.temp;
      temperaturePar = temperaturePar - 273.15;
      temperaturaPar.innerHTML = `Temperatura Actual: ${temperaturePar.toFixed()} °C`;
  
      let descriptionPar = data.weather[0].description;
      descripcionPar.innerHTML = descriptionPar;
  
      let iconsPar = data.weather[0].icon;
      iconosPar.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconsPar}@2x.png"/>`;
    });
  
  // Bogotá Forecast 1 día
  
  let fechaDia1 = document.getElementById("date-dia1");
  let tempMinDia1 = document.getElementById("temp-min-dia1");
  let tempMaxDia1 = document.getElementById("temp-max-dia1");
  let descripcionDia1 = document.getElementById("descrip-dia1");
  let iconosDia1 = document.getElementById("ico-dia1");
  
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Bogotá&appid=ce7af53208c50d2cc85f3f0f0460856d"
  )
    .then((response) => response.json())
    .then((data) => {
      let dia1 = data.list[3].dt_txt;
    //   console.log(dia1);
      moment.locale('es');
      let dateTime = moment(dia1);
      let newDia1 = dateTime.format('dddd');
    //   console.log(newDia1);  
      fechaDia1.innerHTML = newDia1;
  
      let dia1TempMin = data.list[3].main.temp_min;
      dia1TempMin = dia1TempMin - 273.15;
      tempMinDia1.innerHTML = `Temperatura mínima: ${dia1TempMin.toFixed()} °C`;
  
      let dia1TempMax = data.list[3].main.temp_max;
      dia1TempMax = dia1TempMax - 273.15;
      tempMaxDia1.innerHTML = `Temperaturamáxima: ${dia1TempMax.toFixed()} °C`;
  
      let dia1Description = data.list[3].weather[0].description;
      descripcionDia1.innerHTML = dia1Description;
  
      let dia1Icons = data.list[3].weather[0].icon;
      iconosDia1.innerHTML = `<img src="https://openweathermap.org/img/wn/${dia1Icons}@2x.png"/>`;
    });
  
  // Bogotá Forecast 2 día
  
  let fechaDia2 = document.getElementById("date-dia2");
  let tempMinDia2 = document.getElementById("temp-min-dia2");
  let tempMaxDia2 = document.getElementById("temp-max-dia2");
  let descripcionDia2 = document.getElementById("descrip-dia2");
  let iconosDia2 = document.getElementById("ico-dia2");
  
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Bogotá&appid=ce7af53208c50d2cc85f3f0f0460856d"
  )
    .then((response) => response.json())
    .then((data) => {
      let dia2 = data.list[11].dt_txt;    
      moment.locale('es');
      let dateTime = moment(dia2);
      let newDia2 = dateTime.format('dddd');
      fechaDia2.innerHTML = newDia2;

      let dia2TempMin = data.list[11].main.temp_min;
      dia2TempMin = dia2TempMin - 273.15;
      tempMinDia2.innerHTML = `Temperatura mínima: ${dia2TempMin.toFixed()} °C`;
  
      let dia2TempMax = data.list[11].main.temp_max;
      dia2TempMax = dia2TempMax - 273.15;
      tempMaxDia2.innerHTML = `Temperaturamáxima: ${dia2TempMax.toFixed()} °C`;
    
      let dia2Description = data.list[11].weather[0].description;
      descripcionDia2.innerHTML = dia2Description;
  
      let dia2Icons = data.list[11].weather[0].icon;
      iconosDia2.innerHTML = `<img src="https://openweathermap.org/img/wn/${dia2Icons}@2x.png"/>`;
    });

    // Bogotá Forecast 3 día
  
  let fechaDia3 = document.getElementById("date-dia3");
  let tempMinDia3 = document.getElementById("temp-min-dia3");
  let tempMaxDia3 = document.getElementById("temp-max-dia3");
  let descripcionDia3 = document.getElementById("descrip-dia3");
  let iconosDia3 = document.getElementById("ico-dia3");
  
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Bogotá&appid=ce7af53208c50d2cc85f3f0f0460856d"
  )
    .then((response) => response.json())
    .then((data) => {
      let dia3 = data.list[19].dt_txt;
      moment.locale('es');
      let dateTime = moment(dia3);
      let newDia3 = dateTime.format('dddd');
      fechaDia3.innerHTML = newDia3;

      let dia3TempMin = data.list[19].main.temp_min;
      dia3TempMin = dia3TempMin - 273.15;
      tempMinDia3.innerHTML = `Temperatura mínima: ${dia3TempMin.toFixed()} °C`;
  
      let dia3TempMax = data.list[19].main.temp_max;
      dia3TempMax = dia3TempMax - 273.15;
      tempMaxDia3.innerHTML = `Temperaturamáxima: ${dia3TempMax.toFixed()} °C`;
    
      let dia3Description = data.list[19].weather[0].description;
      descripcionDia3.innerHTML = dia3Description;
  
      let dia3Icons = data.list[19].weather[0].icon;
      iconosDia3.innerHTML = `<img src="https://openweathermap.org/img/wn/${dia3Icons}@2x.png"/>`;
    });