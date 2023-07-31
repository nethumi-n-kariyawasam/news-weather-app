import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../weather/weather.css'
// import BeautifulImg from '../weather/Beautiful.jpg'

function Weather() {
  const [data, setData] = useState({})
useEffect(() =>{
  const getWeather = async () => {
    const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Colombo&units=metric&appid=697153f2a1a436219de27352fca53fd6`)


        setData(response.data)
        console.log(response.data)
      }
getWeather()
    },[])
  


  
  return (
    <div className="app">
      
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
 </div>
    </div>
  );
}

export default Weather;