const search=document.querySelector(".searchbar input");
const btn=document.querySelector(".searchbar button");
const weatherimg=document.querySelector(".sicon");
const apikey="0db22c967876b9ce3a14b5a206c2a38d";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weathergenerate(city){
    const response=await fetch(apiurl+city+ `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".show").style.display="none"
    }
    else{

        var item= await response.json();

        document.querySelector(".city").innerHTML=item.name;
        document.querySelector(".temp").innerHTML=item.main.temp + "°C";
        document.querySelector(".humid").innerHTML=item.main.humidity + "%";
        document.querySelector(".wind").innerHTML=item.wind.speed + " M/S";
        document.querySelector(".visi").innerHTML=item.visibility + " metres";

        if(item.weather[0].main == "Clouds"){
            weatherimg.src="clouds.png";
        }
        else if(item.weather[0].main == "Clear"){
            weatherimg.src="clear.png";
        }
        else if(item.weather[0].main == "Rain"){
            weatherimg.src="rain.png";
        }
        else if(item.weather[0].main == "Drizzle"){
            weatherimg.src="drizzle.png";
        }
        else if(item.weather[0].main == "Mist"){
            weatherimg.src="mist.png";
        }
        else if(item.weather[0].main == "Snow"){
            weatherimg.src="snow.png";
        }
        document.querySelector(".show").style.display="block";
        document.querySelector(".error").style.display="none"
    }
   
}

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(search.value){
        weathergenerate(search.value)
        }
})
