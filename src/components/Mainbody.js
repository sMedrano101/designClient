import React from 'react';
import Post from "./Post";
import "../Mainbody.css"

function Mainbody(props) {

    //destructing pins to props.
    let {pins} = props;

    console.log(pins, "data coming in");
    return (
        <div class="main_body">
        {pins.map((pin) => {
            let { urls } = pin;
            return <Post urls={urls}/>
        })}
            
        </div>
    )
}

export default Mainbody
