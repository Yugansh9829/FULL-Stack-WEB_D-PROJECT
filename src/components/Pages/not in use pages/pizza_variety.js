import React from "react";


function App(props) {

    // var imag_ ={
    //         backgroundImage:`url("${props.image}")`, 
    //     }
    return (
        <>
            <div className="contained">

                <div className="first_div">
                    <img src={props.image}></img>
                </div>

                <div className="second_div">
                    <div className="first_container">
                        <div className="eleven">
                            <div className="one_">
                                <p style={{fontSize:"1.5vw",fontWeight:"bolder"}}>variety : {props.variety}</p>
                            </div>
                            <div className="one_">
                                <p>avalability : <span style={{color: "green"}}>available</span></p>
                            </div>
                        </div>
                        <div className="two_">
                            <button type="submit" formAction="/routin" formMethod="post">ORDER</button>
                        </div>
                    </div>
                    <div className="second_container">
                        <p>
                            Ingredients :- 
                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default App;