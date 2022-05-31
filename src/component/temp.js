// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=899b8e1e5f0043b3229560f3b0ec186c
import React,{useState, useEffect} from 'react'
import WeatherChart from './weathercard'
import './style.css'

const Temp = () => {
    const [searchValue,setSearchValue]=useState('')
    const [cityData,setCityData]=useState({})

    const getWeatherInfo= async()=>{
       try{
       let url= `https:api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=899b8e1e5f0043b3229560f3b0ec186c`

    const res=await fetch(url)
    const data= await res.json()

    const {temp,humidity,pressure}=data.main   
    const { main: weathermood } = data.weather[0];
    const{speed}=data.wind
    const {name}=data
    const {country,sunset}=data.sys

    const CityInfo={
        temp,humidity,pressure,weathermood,speed,name,country,sunset
    }
    setCityData(CityInfo)

       }catch(error){
       console.log(error)
       }
    }

    useEffect(()=>{
        getWeatherInfo()
    },[])

  return (
    <>
    <div className='warp'>
        <div className='search'>
            <input
            type='search'
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            />

            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
    </div>

    {/*Weather Icon*/}
   <WeatherChart cityData={cityData} />
    </>
  )
}

export default Temp