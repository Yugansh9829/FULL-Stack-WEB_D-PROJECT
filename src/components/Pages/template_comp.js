import React from "react";
import img_1 from "../images/Template_Home.jpeg"  //expoort this image
import Explore from "./explore_comp.js"
import MenuImg from "../images/menu.jpeg"
import StoreImg from "../images/store.jpeg"
import ContactImg from "../images/catering.jpeg"
import { Link} from "react-router-dom"


var img_arr = [MenuImg, StoreImg, ContactImg];
var Tag_line_arr = ["Explore our Range of Delicious Pizzas", "Find any Nearby Pizza Home", "Live Kitchens for weddings and Parties"]

var template_style = {
    height: "500px",
    width : "100%",
}

var one__ = {
    height :"500px",
    width : "100%",
    display : "flex",
    alignItems: "center",
    color : "white",
    marginBottom : "50px"
}
var two__ = {
    // height :"600px",
    width : "30%",
    display : "flex",
    flexDirection : "column",
    alignItems: "center",
    justifyContent : "center"
}

var three__ = {
    // height :"600px",
    width : "70%",
}

var but_ = {
    backgroundColor : "#33bf33",
    width : "150px",
    height : "45px",
    borderRadius : "10px",
}

var i=0;
export default function App(){

    var arr_ = ["Menu", "Contact Us", "Custom Pizza"]
    var a =0;
    function fun(item){
        return <Explore ite = {item} key={i++} img={img_arr[a]} Tag_line = {Tag_line_arr[a++]}/>
    }

    return(
        <>
            <div className="template_image" style={one__}>
                <div className="first_container_1" style={two__}>
                    <h5>Online Pizza Ordering Facility</h5>
                    <p>delicious pizza for your quality time spent</p>
                    <button style={but_}><Link to="/Menu">Our Menu</Link></button>
                </div>
                <div className="second_container_2" style={three__}>
                    <img src={img_1} alt="error" style={template_style}></img>
                </div>
            </div>
            <div style={{marginBottom : "30px"}}>
                <h2 style={{color:"rgb(62 112 186)", marginLeft:"5vw"}}><b>Explore</b></h2>
            </div>
            <div className="ab123">
                {arr_.map(fun)}
            </div>

            <div style={{margin: "5%"}}>
                <h2 style={{color:"rgb(62 112 186)"}}><b>Pizza: Delivering Happiness</b></h2>
                <p>What's better than having a crispy melty pizza, you ask?</p>
                <p>With Domino's it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration. Plus, you do not even need to rush to the restaurant to have one now. A call, a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, light-on-the-pocket pizza at your doorstep.</p>
                <p>There is something for everyone here. The vegetarians, non-vegetarians, the sides’ lovers and also the ones who love to have something sweet by the time they reach the last bite of the last slice of pizza slice.</p>
            </div>
            
        </>
        
    )
}
