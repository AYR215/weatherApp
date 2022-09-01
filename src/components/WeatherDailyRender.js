import React from "react";
import "../styles/WeatherRender.css";

function WeatherDailyRender ({ dweather }) {
    function closeInfo () {
        const thedivs = document.querySelectorAll(".daily_weather_toclose");
        thedivs.forEach((thediv)=> {thediv.classList.toggle("invisible")})
    }

    if (dweather) {
        console.log(dweather)
        let hourlist = dweather.hourly
        console.log(hourlist)
        return (
            <div className="weather_info">
                { hourlist.map ((hour, index) => {
                    let curDate = new Date(hour.dt * 1000)
                    return (
                        <div className="weather_info_text daily_weather_toclose">
                            {curDate.getHours()}:00 h the temperature will be {(hour.temp).toFixed(1)} C
                        </div>
                    )
                })}
                <button className="weather_closebtn" onClick={closeInfo}>Close / Reopen Daily Weather</button>
            </div>
        )
    }

}

export default WeatherDailyRender