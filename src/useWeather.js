import {useEffect, useState} from "react";
import usePosition from "./usePosition";

const apiKey = "92ea36af6eec075e965eca41f1d7f5af"

export function useWeather() {
    const {latitude, longitude} = usePosition();

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (typeof latitude !== "number" && typeof longitude !== "number"){
            return;
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&appid=${apiKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setWeather({
                        temp: result.main.temp,
                        wind_speed: result.wind.speed,
                        name: result.name,
                        description: result.weather[0].description[0].toUpperCase() + result.weather[0].description.substr(1),
                        pressure: result.main.pressure,
                        humidity: result.main.humidity,
                        icon: result.weather[0].icon,
                        cloudiness: result.clouds.all
                    })
                },
            )
    }, [latitude, longitude])
    return weather
}