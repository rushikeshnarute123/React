import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"



export default function InfoBox({ info }) {
    const INI_IMG = "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>

            <div className='cardContainer'>            
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={INI_IMG} title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"div"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Minimum Temperature = {info.tempMin}&deg;C</p>
                            <p>Maximum Temperature = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i> {info.weather} </i> and feels like {info.feelsLike}&deg;C </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>


        </div>
    )
}