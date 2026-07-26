import { Margin } from "@mui/icons-material";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";



export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 25.31,
        humidity: 81,
        temp: 24.67,
        tempMax: 25.32,
        tempMin: 24.67,
        weather: "overcast clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign:"center",marginTop: "20px"}}>
            <h2>Weather App</h2>
            <SearchBox></SearchBox>
            <InfoBox updateInfo={updateInfo}></InfoBox>
        </div>
    );
}