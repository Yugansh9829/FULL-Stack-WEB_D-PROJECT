import React from "react";
export default function App() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src="https://th.bing.com/th/id/R.e61f0b7a4cad3370dc2fff9ea47e2be6?rik=6rywq8mkFQYeoQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2fpi587GG5T.jpg&ehk=%2bJsBKMLMZza0rAjbldy6%2ffpNIT0S%2bbLZc8GfeTv%2fpXs%3d&risl=&pid=ImgRaw&r=0" alt="error" style={{Height :"30px",width :"40px"}}></img>
                <a className="navbar-brand" href="/">Pizza-Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Menu">Order Custom Pizza</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}