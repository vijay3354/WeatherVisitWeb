import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateinfo}){
    let[City,setCity]=useState("");
    let [Err,setErr]=useState(false);
    //const API_URL="https://api.openweathermap.org/data/2.5/weather";
const apikey="6abb975398125fee8071a0409efa9b3c";
    let getWetherinfo = async()=>{
       try{
        let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apikey}&units=metric`);
        let jsonresponse=await response.json();
        let result={
            city:City,
            temp:jsonresponse.main.temp,
            tempmax:jsonresponse.main.temp_max,
            tempmin:jsonresponse.main. temp_min,
            feelslike:jsonresponse.main.feels_like,
            humidity:jsonresponse.main.humidity,
            weather:jsonresponse.weather[0].description,
        };
        console.log(result);
        return (result);
       }catch(err){
        throw err;
        };
       
    };
   
   

    let handleChange  =(evt ) => {
        setCity(evt.target.value);
    };
    let handleSubmit=async(evt)=>{
       try{
        evt.preventDefault();
        console.log(City);
        setCity("");
       let info=await getWetherinfo();
       updateinfo(info);
       }
       catch(err){
       setErr(true);
       };
    };
  
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit} >
            <TextField id="city" label="City Name" variant="outlined" required  value={City} onChange={handleChange}/>
            <br />
            <br />
            <Button variant="contained" type="submit"> Search </Button>
            {Err&&<p style={{color:"red"}}>no such place exit in API</p>}
            </form>
           
            
        </div>
    );
}