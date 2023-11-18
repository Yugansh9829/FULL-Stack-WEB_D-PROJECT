import React from "react";
import Template_comp from "./components/Pages/template_comp"
import Header from "./components/Pages/Header"
import Footer from "./components/Pages/footer"
import Menu from "./components/Pages/Menu"
import About from "./components/Pages/About"
import Vegpizza from "./components/Pages/Veg_pizza_page"
import Fetch_location from "./components/Pages/Location_Fetch_after_order_now"
import Helper_checkout from "./components/Pages/helpler"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";



function App(){
  // var [name,setName]=useState("");
  // // console.log(name);


var veg_pizza_image = ["https://www.dominos.co.in/files/items/Margherit.jpg", "https://www.dominos.co.in/files/items/Farmhouse.jpg", "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg", "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg"]

var veg_pizza_name = ["margrita", "Farm House", "Pappy Paneer", "Green Wave"]
var j=0;

  function veg_pizza_fun(item){
    return <div className="abc1" style={abc1_style}><Vegpizza Pizza_name={item} img_src={veg_pizza_image[j++]} key={j}/></div>
  }
  var abc1_style = {
    width : "100%",
    display: "flex",
  flexWrap : "wrap",
  justifyContent : "space-evenly",
  }
  // var i=0;
  // var tagline = ["Classic delight with 100% real mozzarella cheese", "Delightful combination of onion, capsicum, tomato & grilled mushroom", "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika", "The awesome foursome! Golden corn, black olives, capsicum, red paprika"]
  // function checkout_page_calls(item){
  //   return <div className="checkout-parent"><Checkout name={item} img_link={veg_pizza_image[i]} tagline={tagline[i]} key={i++}/></div>
  // }
  return(
    <>
    
    <Header/>
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Template_comp/> }> </Route>
        <Route path="/Menu" element={<Menu />}> </Route>
        <Route path="/item" element={<Template_comp/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/vegP" element={veg_pizza_name.map(veg_pizza_fun)}></Route>
        <Route path="/order" element={<Fetch_location/>}></Route>
        <Route path="/checkout" element={<Helper_checkout/>}></Route>
        
      </Routes>
    
    </BrowserRouter>
     
    <Footer/>
   
    </>
  )
}

export default App;

