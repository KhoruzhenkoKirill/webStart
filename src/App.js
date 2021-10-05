import './App.css'
import React from "react"
import Button from './Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useWeather} from "./useWeather"
import {Spinner} from "react-bootstrap";
import Button2 from "./Button2";
import usePosition from "./usePosition";

function App() {

    const weather = useWeather();
    const {value} = Button2();
    let temp;

    console.log(value)

    if (value === 1)
        temp = parseInt(weather.temp);
    if (value === 2)
        temp = parseInt(weather.temp) * 9 / 5 + 32;

    if(!weather)
        return <Spinner animation="border"/>;

    return (
            <main className="Body">
                <section className="Top">
                    <article className="City">
                        {weather.name}
                    </article>
                    <article className="Switch">
                        <Button2/>
                    </article>
                </section>
                <article className="ChangeCity">
                    <button className={"but"}>Сменить город</button>
                </article>
                <article className="Geolocation">
                    <button className={"but"}>
                        <div className="img2"/>
                        Моё местоположение
                    </button>
                </article>
                <section className="Center">
                    <article className="Weather">
                        <img className={"img"} src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>
                        {parseInt(weather.temp)}°
                    </article>
                    <article className="Weather-Description">
                        {weather.description}
                    </article>
                </section>
                <section className="Bottom">
                    <section>
                        <article className="Params">
                            Ветер
                        </article>
                        <article className="Params">
                            Давление
                        </article>
                        <article className="Params">
                            Влажность
                        </article>
                        <article className="Params">
                            Облачность
                        </article>
                    </section>
                    <section>
                        <article className="Values">
                            {weather.wind_speed} м/с
                        </article>
                        <article className="Values">
                            {Math.round(weather.pressure/1.333)} мм рт. ст.
                        </article>
                        <article className="Values">
                            {weather.humidity}%
                        </article>
                        <article className="Values">
                            {weather.cloudiness}%
                        </article>
                    </section>
                </section>

            </main>
        );
}
export default App;
