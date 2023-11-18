import React from "react";
import Header from "../Header";
import Footer from "../footer";
import Selected_items from "./Selected_items";
import Ingredients from "./ingredients";

var pizza_base = ["Thick Crust","Thin Crust","Stuffed Crust","Coated Crust","Pan Crust"];
var sauce = ["Red sauce", "White sauce", "BBQ sauce", "Pesto sauce", "Sweet pizza sauce"];
var cheese = ["Mozzarella Cheese","Cheddar Cheese","Aged Havarti","Gorgonzola", "Toma"];
var veggies = ["Bell peppers","Broccoli","Cauliflower","Mushrooms","Spinach",
"Zucchini","Artichokes","Olives","Cherry tomatoes","Arugula"];

var doc = [pizza_base,sauce,cheese,veggies];
var i=-1;
var tit = ['pizza Base','Sauce','Cheese','veggies'];
export default function App(){
    
    function ingredient(item){
        i=i+1;
        console.log(tit[i]);
        if(i==4)i=0;
        return <Ingredients title={tit[i]} base={item} key={i}/>
    }
    
    return(
        <>
            <Header/>
            <Selected_items/>
            <div className="complete-container">
                {doc.map(ingredient)}
            </div>
            
            
            <Footer/>
        </>
    )
}
//sauce={sauce[0]} cheese={cheese[0]} veggies={veggies[0]}