
import React from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";

function ContadorSimple({ uno, dos, tres, cuatro }) {
    return (
        <div className="contadorGrande">
            <div className="segundosCinco"><i className="far fa-clock"></i></div>
            <div className="segundosCuatro">{cuatro}</div>
            <div className="segundosTres">{tres}</div>
            <div className="segundosDos">{dos}</div>
            <div className="segundosUno">{uno}</div>
        </div>
    );
}

let contador = 0;
setInterval(() => {
    const tiempo = {
        cuatro: Math.floor(contador / 1000) % 10,
        tres: Math.floor(contador / 100) % 10,
        dos: Math.floor(contador / 10) % 10,
        uno: contador % 10,
    };
    console.log(tiempo.cuatro, tiempo.tres, tiempo.dos, tiempo.uno);

    
    ReactDOM.render(
        <ContadorSimple {...tiempo} />,
        document.querySelector("#app")
    );

    contador++;
}, 1000);
