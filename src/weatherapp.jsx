import { useState } from "react";
import InfoBox from "./infobox";
import SearchBox from "./searchBox";
import "./weatherapp.css"

export default function Weatherapp(){
    const [weatherInfo ,setweatherInfo]=useState({
        city:"Delhi",
        feelslike:28.84,
        humidity:42,
        temp:29.05,
        tempmax:29.05,
        tempmin:29.05,
        weather:"haze"
    });
    let updateinfo=(result)=>{
        setweatherInfo(result);
    };

    return(
        <div className="weatherapp">
            <h1> WEATHER VISIT APP</h1>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};