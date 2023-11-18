import React, {useEffect, useState} from "react"
import axios from "axios"

const api_endpoint = `https://api.openweathermap.org/data/3.0/onecall`;
const api_key = 'bd1465dc25eca88b8fc0f7cf4448b6d6';
export default function App(){

    const [latitude,set_latitude] = useState('');
    const [longitude,set_longitude] = useState('');

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition( (position)=>{
            set_latitude(position.coords.latitude);
            set_longitude(position.coords.longitude);
            
            let final_api_end_point = `https://api.openweathermap.org/data/3.0/onecall${api_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${api_key}`;
            console.log(final_api_end_point);
            // axios.get(final_api_end_point)
            // .then((respond)=>{
            //     console.log(respond.data);
            // })
        })
    },[])



    return(
        <>
        <div className="order-container">
            <div className="order-first">
                <input placeholder="Enter locality"></input>
                <button>LOCATE ME!</button>
            </div>
            <div className="order-second">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1c/72/ce/f4/une-pizza-fine-et-croustillant.jpg"></img>
            </div>
        </div>

        </>
    )
}