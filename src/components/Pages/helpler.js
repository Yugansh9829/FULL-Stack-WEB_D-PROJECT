import React,{useEffect, useState} from "react"
import Checkout from "./Add_to_cart_page";
import Cart from "./cart"

var i=0;
const veg_pizza_name = ["margrita", "Farm House", "Pappy Paneer", "Green Wave"]
const tagline = ["Classic delight with 100% real mozzarella cheese", "Delightful combination of onion, capsicum, tomato & grilled mushroom", "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika", "The awesome foursome! Golden corn, black olives, capsicum, red paprika"]
const veg_pizza_image = ["https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/79bc3609-690b-440e-b8be-74694b1f3215_new_margherita_2502.jpg", "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/1b892978-f689-4199-90d2-47df4e261235_farmhouse.png", "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/f65964c6-de96-475d-a5a9-3f3698d66ee7_new_peppy_paneer.jpg", "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/8a9f4cab-4f46-4b71-8e9b-55bba0b96366_new_veggie_paradise.jpg"]

var checkout_style = {
    display : "flex",
    width : "100%",
    height : "auto",
    justifyContent : "space-evenly",
    flexWrap : "wrap",
}


var prices=["199","200","100","300"];


export default function App(){
    var j=0;
    function quantity_function(event){
        i=0;
        if(event.target.id==="add"){
            
            set_total(subTotal+=Number(prices[event.target.className]));
        }else{
            set_total(subTotal-=Number(prices[event.target.className]));
        }
    }
    function final_items(item){
        // console.log(item.pizza_name);
        return <Cart img_link={item.pizza_image} heading={item.pizza_name} tagline={item.tagline} price={item.price} key={j++} quantity={item.quantity} quantity_fun={quantity_function} idx={veg_pizza_name.indexOf(item.pizza_name)}/> ;
        
        
    }
    var [cart_items,set_cart] = useState([]);
    var [subTotal,set_total] = useState(0);

    function item_to_add_in_cart(item){
        const element = {
            pizza_name : veg_pizza_name[item],
            pizza_image : veg_pizza_image[item],
            tagline : tagline[item],
            price : prices[item],
            quantity : 1,
        }
        i=0;//as our page is refresing here so we need to set i again to zero it is must.
        set_total(subTotal+=Number(prices[item]));
        set_cart([...cart_items,element]);
    }
    function checkout_page_calls(item){
        return <Checkout name={item} img_link={veg_pizza_image[i]} tagline={tagline[i]} id={i} key={i++} fun_pass={item_to_add_in_cart}/>
    }

    return(
        <>
        <div style={{display:"flex", width:"100%"}}>
            <div className="checkout-cart-parent">
                <div className="checkout-helper" style={checkout_style}>
                    {veg_pizza_name.map(checkout_page_calls)}
                </div>
            </div>
            <div className="subtotal-parent">
                <div className="My_cart">
                    {cart_items.map(final_items)}
                </div>
                {cart_items.length===0?<div style={{backgroundColor:"rgb(239, 245, 251)", fontSize:"1.5vw"}}><b>NO ITEMS IN YOUR CART!</b></div>:
                <div className="subtotal">
                    <div style={{display:"flex", justifyContent:"space-between"}}>   
                        <p style={{fontWeight:"1.7vw", fontSize:"1.2vw"}}><b>SubTotal</b></p>
                        <p>{subTotal}</p>
                    </div>
                    
                    <button style={{backgroundColor:"rgb(130, 187, 55)", height:"50%",color:"white",fontWeight:"1.7vw", fontSize:"1.2vw"}}><b>Checkout</b></button>
                </div>
                }
                
            </div>
        </div>
        
        </>
    )
}