import React from "react";
import Header from "../Header";
import Footer from "../footer";
import Pizza_variety from "./pizza_variety";

const Pizza_name = ['Chicago_Style','Brick_Oven_Pizza','Italian_Pizza','Neapolitan_Pizza','California_Pizza'];

let Pizza_image = {
    Chicago_Style : "https://www.simplyrecipes.com/thmb/vipippco2U3XmHdP72m0glb1hPE=/2958x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chicago-Deep-Dish-Pizza-LEAD-5-f8c04d3d77b24e479bbb1502758a5ed1.jpg",
    Brick_Oven_Pizza : "https://www.bacinos.com/wp-content/uploads/2021/04/How-Long-Can-Pizza-Sit-Out.jpg",
    Italian_Pizza : "https://www.walksofitaly.com/blog/wp-content/uploads/2013/01/Pizza-00.jpg",
    Neapolitan_Pizza : "https://th.bing.com/th/id/R.9e0caa8628009f5bb525d1e09604fda9?rik=dI0nOfBy3ahp1w&riu=http%3a%2f%2fvitaitaliantours.com%2fwp-content%2fuploads%2f2016%2f03%2fNeapolitan-Pizza-Margherita.jpg&ehk=Rk%2bfgzpAHbGig6ZHOExH6bwW62dG29BR4XPCsHqKBSI%3d&risl=1&pid=ImgRaw&r=0",
    California_Pizza : "https://th.bing.com/th/id/OIP.-HrgDGmLI7YLSDkwzOq57AHaFj?pid=ImgDet&rs=1" ,
};

var here_={
    margin: "20px 0" ,
}

export default function App(){
    // console.log(Pizza_image['Chicago_Style']);
    return(
        <>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <h1 style={here_}>Varities of Pizzas available</h1>
                <span><button style={{borderRadius:"5px",backgroundColor:"black",width:"10vw",height:"70px",color:"white"}}type="submit">Create custom pizza</button></span>
            </div>
            
            <div className="main_contanier">

            
            <Pizza_variety 
                variety= {Pizza_name[0]}
                image={Pizza_image['Chicago_Style']}
            />
            <Pizza_variety 
                variety= {Pizza_name[1]}
                image={Pizza_image['Brick_Oven_Pizza']}
            />
            <Pizza_variety 
                variety= {Pizza_name[2]}
                image={Pizza_image['Italian_Pizza']}
            />
            <Pizza_variety 
                variety= {Pizza_name[3]}
                image={Pizza_image['Neapolitan_Pizza']}
            />
            <Pizza_variety 
                variety= {Pizza_name[4]}
                image={Pizza_image['California_Pizza']}
            />
            </div>
        </>
    )
}