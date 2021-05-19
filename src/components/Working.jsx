
import React from 'react'

const Working = () => {
    return (
        <>
             <h3 className="workheading">How WeatherAdvisor is working ?</h3>
            <div className="howback" >
            
                    <iframe title="Openweathermap" className="iframeweathersite" src="https://openweathermap.org/" frameborder="0"></iframe>
            </div>
            <div className="contenthow">
                <p> <b >Hey welcome to <span style={{color:"#004F00", fontSize:"20px"}}>WeatherAdvisor </span></b> Basically, here  we are calling API key of OpenWeatherMap. By passing the required city data to the api key, we are fetching data through
                    javascript fetch method. After getting data we applied some conditions for showing icons about cloud, rain, sunny weather and giving travel suggestions to user with icon and some string that will guide user!. <b>Thank You!</b>
                </p>
            </div>

        </>
    )
}

export default Working
