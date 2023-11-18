import React, {useState, useEffect} from "react";
import Foodie_Background from "../images/Foodie_BackGround.jpg"
import Fetch_location from "./Location_Fetch_after_order_now"
import {Link} from "react-router-dom"

var abc123_style = {
    height : "400px",
    width : "550px",
    backgroundImage : `url(${Foodie_Background})`,
    color : "white",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "space-between",
    marginTop : "25px",
    marginBottom : "25px",
}

var button_style = {
    marginBottom : "20px",
    width : "20%",
    height : "10%",
    borderRadius : "10px",
    backgroundColor : "yellow",
}
// var abc1_style = {
//   width : "100%",
//   display: "flex",
// flexWrap : "wrap",
// flexDirection : "row",
// justifyContent : "space-evenly",
// alignItems : "center",
// }
export default function App(props){
    
    return(
        <>
            <div className="abc123" style={abc123_style}>
                <img src={props.img_src} alt="error" style={{marginTop : "40px"}}></img>
                <h3>{props.Pizza_name}</h3>
                <button style={button_style} > <Link to={"/order"}><b>Order Now</b></Link></button>
            </div>
        </>
    )
}