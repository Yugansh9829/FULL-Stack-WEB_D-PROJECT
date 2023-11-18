import React from "react";
import Comp from "./comp";
var i=0;
function fun(item){
    i=i+1;
    return <Comp ele={item} key={i}/>
}


export default function App(props){
    // var tit = ['pizza Base','Sauce','Cheese','veggies'];
    // function fun_2(elemet){
    //     return elemet;
    
    // };
    return(
        <>
            <div className="first-cont">
                <div className="first-first">
                    <h3>{props.title}</h3>
                </div>
                <div className="first-second">
                    {props.base.map(fun)}
                </div>
            </div>
        </>
    )
}