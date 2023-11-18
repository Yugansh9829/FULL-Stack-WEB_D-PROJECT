import React from "react";

export default function App(props){     //props.img_link,  props.name,  props.tagline
    function fun(event){
        event.preventDefault();
       props.fun_pass(event.target.className);
    }
    return(
        <>
            <div className="checkout">
                <div className="checkout-image">
                    <img src={props.img_link}></img>
                </div>
                <div className="checkout-written">
                    <h6><b>{props.name}</b></h6>
                    <p>{props.tagline}</p>
                    <hr></hr>
                </div>
                <div className="checkout-add-to-cart" >
                    <button className={props.id} onClick={fun} ><b className={props.id}>ADD TO CART</b></button>
                </div>
            </div>
        </>
    )
}