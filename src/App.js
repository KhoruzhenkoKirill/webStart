import './App.css'
import React from "react"
import Button from './Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useWeather} from "./useWeather"
import {Spinner} from "react-bootstrap";

function App() {

    const weather = useWeather();
    
    if(!weather)
        return <Spinner animation="border"/>;
    
    return (
            <main className="Body">
                <section className="Top">
                    <article className="City">
                        {weather.name}
                    </article>
                    <article className="Switch">
                        <Button/>
                    </article>
                </section>
                <article className="ChangeCity">
                    Сменить город
                </article>
                <article className="Geolocation">
                    <div className="img2"/>
                </article>
                <section className="Center">
                    <article className="Weather">
                        <div className="img"/>
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
                            Вероятность дождя
                        </article>
                    </section>
                    <section>
                        <article className="Values">
                            {weather.wind_speed} м/с
                        </article>
                        <article className="Values">
                            {weather.pressure} мм рт. ст.
                        </article>
                        <article className="Values">
                            {weather.humidity}%
                        </article>
                        <article className="Values">
                            10%
                        </article>
                    </section>
                </section>

            </main>
        );
}
export default App;
