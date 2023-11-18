import React,{useState, useEffect} from "react"
import Foodie_Background from "../images/Foodie_BackGround.jpg"
import {useNavigate} from "react-router-dom"


var abc123_style = {
    height : "400px",
    width : "550px",
    backgroundImage : `url(${Foodie_Background})`,
    color : "white",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "space-between",
    marginTop : "50px",
    marginBottom : "50px",
}

var abc1_style={
    display: "flex",
    flexWrap : "wrap",
    justifyContent : "space-around",
}

export default function App(){ 
    
    // function seta(){
    //     a+=1;
    //     console.log(a);
    // }
    // use use state to direct from here
    const navigate = useNavigate();
    var [a,seta] = useState(0);

    useEffect(()=>{
        if(a===1){
            navigate("/vegP");  
        }else if(a===2){
            console.log("Non-Veg")
        }else if(a===3){
            console.log("bevarages");
        }else if(a===4){
            console.log("pasta")
        }
        return;
    })
    
    return(
    <>
        <div className="abc1" style={abc1_style}>
            <div className="abc123" onClick={()=>seta(1)} id="0" style={abc123_style}>
                <h3>VEG. PIZZA</h3>
                <img src="https://www.dominos.co.in/theme2/front/images/menu-images/my-vegpizza.webp" alt="error"></img>
                <p>A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier</p>
            </div>
            <div className="abc123" onClick={()=>seta(2)} id="1" style={abc123_style}>
                <h3>NON-VEG. PIZZA</h3>
                <img src="https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp" alt="error"></img>
                <p>Choose your favourite non-veg pizzas from the Domino's Pizza menu.</p>
            </div>
            <div className="abc123" onClick={()=>seta(3)} id="2" style={abc123_style}>
                <h3>Sides and Beverages</h3>
                <img src="https://www.dominos.co.in/theme2/front/images/menu-images/sides_beverages.webp" alt="error"></img>
                <p>Complement your pizza with wide range of sides & beverages available at Domino's Pizza India</p>
            </div>
            <div className="abc123" onClick={()=>seta(4)} id="3" style={abc123_style}>
                <h3>Pasta</h3>
                <img src="https://www.dominos.co.in/theme2/front/images/menu-images/pasta_new.webp" alt="error"></img>
                <p>Choose your favourite pizza pasta from the Domino's pasta menu</p>
            </div>
        </div>
    </>
    )
}

//javascript for above components.
