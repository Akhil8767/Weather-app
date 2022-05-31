import React ,{useState,useEffect}from 'react'

const Weathercard = ({cityData}) => {
    const [weatherState,setWeatherState]=useState('')
   
    const {
        temp,humidity,pressure,weathermood,speed,name,country,sunset
    }=cityData

    useEffect(()=>{
        if(weathermood){
            switch (weathermood) {
                case "Clouds": setWeatherState("wi-day-cloudy");
                    
                    break;
                case "Haze": setWeatherState("wi-fog");
                    
                    break;
                case "Clear": setWeatherState("wi-day-sunny");
                    
                    break;
            
                default:setWeatherState("wi-day-sunny");
                    break;
            }
        }
     },[weathermood])

    const sec=sunset
    const date = new Date (sec * 1000)
    const time= `${date.getHours()}:${date.getMinutes()}`

  return (
    <>
     <article className='widget'>
            <div className='weatherIcon'>
                <i className={`wi ${weatherState}`}> </i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                <div className='weatherCondition'>{weathermood}</div>
                <div className='place'>{name},{country}</div>
            </div>
            </div>
            <div className='date'>{new Date().toLocaleString()}</div>
            
            {/*our four class*/}
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className='extra-info-leftside'>
                            {time}<br/>
                            sunset
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className='extra-info-leftside'>
                            {humidity}<br/>
                            humidity
                        </p>
                    </div>
                </div>
                <div className='weather-extra-info'>
                <div className='two-sided-section'>
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className='extra-info-leftside'>
                            {pressure}<br/>
                            pressure
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className='extra-info-leftside'>
                            {speed}<br/>
                            speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Weathercard