import React, {useEffect, useState} from 'react'
import axios from "axios"
import Weather from "../assets/logoweather.jpg"
const Home = () => {
  
  const [search, setSearch] = useState("pune");

  const [temp, setTemp] =useState();
  const[weather, setWeather] =useState();
  useEffect( () => {
    async function getdata(){
      
    const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=072c87ebe1f5f0af92b36aeb409f3b1c`);
    
    console.log(res.data);
    
    setTemp((res.data.main.temp-273).toFixed(2))
    setWeather(res.data.weather[0].main);
    }
    getdata();

  },[search]);

    return (
       
        
        <div className="homeback">
            
            <div className="card">
               
               <div className="center">

                 <div className="logo" style={{textAlign:"center", fontSize:"40px"}}><img src={Weather}  alt="logo" /> </div>

                 <div className="search-box">
                <input type="text" placeholder="Searching..." onChange={(e)=>{
                      setSearch(e.target.value);
                }} /> </div>
              
               <div className="content">
              <h5 className="cityresult">City Name : {!search ? "Pune" :search} </h5>
                <h5>City temperature : {temp} <span>&#176;</span>C </h5>
                <h5 id="traveladvice" style={{display:"inline-block"}}>Travel Advice : 
                {(temp)>40 ? 
                <p style={{display:"inline-block"}}> Its hot</p> : 
                <p style={{display:"inline-block"}}> Yes you can </p>} </h5>

                <h1 className="resultlogo">{weather === "Clouds" ? 
                <p ><i class="fas fa-cloud-sun"></i></p> :
                <p ><i class="fas fa-cloud-sun-rain"></i></p>
                
                }</h1>
              </div>

               </div>

            </div>
        </div> //this homeback
     
    )
}

export default Home
