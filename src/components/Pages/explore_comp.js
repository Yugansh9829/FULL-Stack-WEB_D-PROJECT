import React from "react"
import {Link} from "react-router-dom"

var explore_box_design = {
    display : "flex",
    alignItems : "center",
    justifyContent : "space-between",
    flexDirection : "column",
    border : "2px solid black",
    height : "100%",

}

export default function App(props){
    return(
        <div className="Explore_box" style={explore_box_design}>
                <div style={{height: "35%", width : "100%", display : "flex", alignItems : "center", justifyContent : "center", flexDirection: "column"}}>
                    <img src={props.img} alt="error"></img>
                </div>
                <div style={{height: "40%", width : "100%", display : "flex", alignItems : "center", justifyContent : "center", flexDirection: "column"}}>
                    <h5><b>{props.ite}</b></h5>
                    <p>{props.Tag_line}</p>
                </div>

            <div style={{color:"red",border : "1px solid black", height:"25%", width : "100%", display : "flex", alignItems : "center", justifyContent : "center"}}>
                <b><Link to={`/${props.ite}`}>{props.ite}</Link></b>
            </div>
            
        </div>
    )
}