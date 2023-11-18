import React from "react";

export default function App() {
    return (
        <>
            <footer className="bg-dark text-center text-white">

                <div className="container p-4">
                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>

                    <section className="">
                        <form action="">

                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example21">Email address</label>
                                    </div>
                                </div>

                                <div className="col-auto">

                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>

                    <section className="mb-4">
                    </section>



                    <section className="">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Menu</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Veg Pizza</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Pasta</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Pizza Crust</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Beverages</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Pizza and Restaurants</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Restaurants Near me</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Food Delivery</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Italian Food</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Order Food Online</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Pizzas</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Create Custom Pizza</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Pizza varities</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Disclaimer</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Terms and Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                       
                    </section>
                    
                </div>
               

                <div className="text-center p-3">
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">Pizza Home</a>
                </div>
                
            </footer>
        </>
    )
}