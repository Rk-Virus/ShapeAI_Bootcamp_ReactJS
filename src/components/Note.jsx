import React from "react";

function Note(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>This is an amazing bootcamp. Let's get started! <br /> Lorem ipsum dolor sit amet consectetur adllat a optio.</p>
        </div>
    )
}

export default Note;