import React, { useState } from "react"

var cart_item_style = {
    margin : "10px",
    marginTop :"20px",
    display : "flex",
    height : " 150px",
    width : "90%",
    // border : "2px solid black",
    flexDirection : "column",
    padding : "10px",
    fontSize : "1.2vw"
}
var item_style = {
    display : "flex",
    height : "80%",
    width : "100%",
}
var image_style_ = {
    height : "100%",
    width : "25%",
}
var discription_style={
    width : "70%",
    height : "auto",
}
var item_price_box = {
    height :"25%",
    width : "100%",
    display : "flex",
    marginTop : "22px",
    // fontSize :"205%"
    marginBottom : "20px",
}
export default function App(props){  //1.img_link,  2.headline,  3.tagline,  4.price

    var [quantity,set_quantity] = useState(props.quantity);
    function update_quantity(event){
        props.quantity_fun(event);
        if(event.target.id==="add"){
            set_quantity(quantity+=1);
        }
        else if(event.target.id==="subtract"){
            if(quantity==1){
                //*****remove this element from cart using useState hook******;;;
                return;
            }
            set_quantity(quantity-=1)
        }
    }
    return(
        <>
            <div className="cart-item" style={cart_item_style}>
                <div className="item_here" style={item_style}>
                    <div className="image_here" style={image_style_}>
                        <img src={props.img_link} style={{width:"90%", height:"85%", borderRadius:"5px"}}></img>
                    </div>
                    <div className="item_discription" style={discription_style}>
                        <h6><b>{props.heading}</b></h6>
                        <p style={{fontSize:"70%"}}>{props.tagline}</p>
                    </div>
                </div>
                <div className="item_price" style={item_price_box} >

                    <button id="subtract" className={props.idx} onClick={update_quantity} style={{border : "1px solid black", width: "9%", height: "90%", backgroundColor: "white"}}>-</button>

                    <button style={{ border: "1px solid black", width: "9%", height: "90%",backgroundColor: "white",display:"inline"}}>{quantity}</button>

                    <button  id="add" className={props.idx} onClick={update_quantity} style={{border : "1px solid black", width: "9%", height: "90%", backgroundColor: "white"}}>+</button>

                    <p style={{display: "inline", marginLeft : "160px", fontSize :"85%", color:"rgb(44, 101, 128)", fontWeight: "bold"}}>${props.price}</p>
                </div>
                <hr></hr>
            </div>
        </>
    )
}