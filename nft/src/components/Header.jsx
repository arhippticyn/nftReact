import React from "react";

const Header = () => {
    return (
        <div className="nav-wrapper">
            <div className="container">
                <nav className="nav">
                    <span className="nav-menu">menu</span>

                    <h2 className="nav-title">supernft.</h2>

                    <div className="nav-func">
                        <img src="/image/loupe.svg" alt="" className="nav-func__loupe" />

                        <span className="nav-func__login">Log In</span>

                        <button type="button" className="nav-func__upload">Upload</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header