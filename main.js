const api={
    key:"5dc5fb18af773e4f61397814c73e47ae",
    baseurl:"http://api.openweathermap.org/data/2.5/"
}
const searchbox=document.querySelector(".search-box");
searchbox.addEventListener("keypress",setQuery);

function setQuery(e){
    if(e.keyCode==13){
        getReasults(searchbox.value);
        
    }
}
function getReasults(query) {
fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
.then(weather =>{
    return weather.json();
}).then(displayReasults);    
}

function displayReasults(weather){
    console.log(weather);
    let city=document.querySelector('.location .city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let [month, date1, year] = new Date().toLocaleDateString("en-US").split("/")
    let r=new Date([month, date1, year]);
    let date=document.querySelector('.location .date');
    date.innerText=r;


    let  temp=document.querySelector('.current .temp');
    temp.innerText= `${Math.round(weather.main.temp)}°C`;
    weather_el=document.querySelector('.current .weather');
    weather_el.innerText=weather.weather[0].main;

    let hilow=document.querySelector('.hi-low');
    hilow.innerText=`${weather.main.temp_min}°C/${weather.main.temp_max}°C`;
    
    

}