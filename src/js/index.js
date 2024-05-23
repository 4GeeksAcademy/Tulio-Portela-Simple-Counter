//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <div className="secondsFive"><i className="far fa-clock"></i></div>
            <div className="secondsFour">{props.Four}</div>
            <div className="secondsThree">{props.Three}</div>
            <div className="secondsTwo">{props.Two}</div>
            <div className="secondsOne">{props.One}</div>
        </div>
    );
}

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = counter % 10;
    console.log(four, three, two, one);

    //render your react application
    ReactDOM.render(
        <SimpleCounter Four={four} Three={three} Two={two} One={one} />,
        document.querySelector("#app")
    );

    counter++;
}, 1000);
