import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import"./infobox.css";
export default function InfoBox({info}){
    
   // const img_url="https://images.unsplash.com/photo-1527666466760-f6a7a2b31176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhemV8ZW58MHx8MHx8fDA%3D";
    const hoturl="https://t3.ftcdn.net/jpg/02/68/48/90/240_F_268489083_Q5Vb8WaWyy3D5sYsmsheWq2cojgWDQ3T.jpg";
    const rainurl="https://img.freepik.com/free-photo/weather-effects-collage-concept_23-2150062064.jpg?t=st=1729186097~exp=1729189697~hmac=6931c18e19d3491b73be11da4e24f04838fec643322f7f8588def3d8f560c204&w=996";
    const coolurl="https://img.freepik.com/free-photo/girl-with-umbrella-walking-path-row-trees-winter_335224-542.jpg?ga=GA1.1.1029258914.1689943152&semt=ais_hybrid";
    return(
        <div className="infobox">
            <div className='card'>
            <Card sx={{ maxWidth: 745 }}className='cardcontainer'>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainurl :info.temp>15?hoturl:coolurl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80?<BeachAccessIcon/> :info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temparture : {info.temp}&deg;C</p>
          <p>TempartureMax : {info.tempmax}&deg;C</p>
          <p>TempartureMin : {info.tempmin}&deg;C</p>
          <p>Humidity : {info.humidity}</p>
          <p> Weather describe as <i>{info.weather}</i>  And Fellslike {info.feelslike}</p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>

        </div>
    );
}