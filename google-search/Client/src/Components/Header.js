import React from "react";
import heroBanner from "../images/heroBanner";

const headerStyle = {
    "backgroundImage": `url(${heroBanner})`,
    "maxWidth": "100vw",
    "height": "calc(100vw * .43333)",
    "backgroundSize": "cover",
    "position": "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
        <h1>Google Book Search</h1>
        <p>Search for your favorite book and save them!</p>
        </header>
    );
}

export default Header;