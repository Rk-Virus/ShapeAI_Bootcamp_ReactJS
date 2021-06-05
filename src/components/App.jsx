import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


function App(){
    return (
        <div>
            <Header/>
            <div className="container">
                <Note title="JavaScript and React.js"/>
                <Note title="Deep Learning with Python"/>
                <Note title="Backend with Node.js and Express.js"/>
                <Note title="Other Bootcamp"/>
                <Note title="Other Bootcamp"/>
                <Note title="Other Bootcamp"/>
                <Note title="Other Bootcamp"/>
                <Note title="Other Bootcamp"/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;