import React from "react";

function Footer(){

    var year = new Date().getFullYear();

    return (
        <footer>
            <h4> Copyright &copy; {year}</h4>
        </footer>
    )
}

export default Footer;