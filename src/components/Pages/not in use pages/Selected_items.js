import React from "react"

export default function App(){


    return(
        <>
            <div className="first-container">
                <div className="heading_container">
                    <h2>Selected Stuffs</h2>
                </div>
                <div className="selected_item_container">
                    <div className="pizza_base">
                        <p>pizza Base :- <span id="selected_pizza_base"></span></p>
                    </div>
                    <div className="sauce">
                        <p>sauce :- <span id="selected_pizza_base"></span></p>
                    </div>
                    <div className="cheese">
                        <p>Cheese :- <span id="selected_pizza_base"></span></p>
                    </div>
                    <div className="veggies">
                        <p>veggies :- <span id="selected_pizza_base"></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}