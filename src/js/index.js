// Importar React en el paquete
import React from "react";
import ReactDOM from "react-dom";

// Incluir tus estilos en el paquete de webpack
import "../styles/index.css";

function ContadorSimple(props) {
    return (
        <div className="contadorGrande">
            <div className="segundosCinco"><i className="far fa-clock"></i></div>
            <div className="segundosCuatro">{props.cuatro}</div>
            <div className="segundosTres">{props.tres}</div>
            <div className="segundosDos">{props.dos}</div>
            <div className="segundosUno">{props.uno}</div>
        </div>
    );
}

let contador = 0;
setInterval(function(){
    const cuatro = Math.floor(contador / 1000) % 10;
    const tres = Math.floor(contador / 100) % 10;
    const dos = Math.floor(contador / 10) % 10;
    const uno = contador % 10;
    console.log(cuatro, tres, dos, uno);

    // Renderizar tu aplicación de React
    ReactDOM.render(
        <ContadorSimple cuatro={cuatro} tres={tres} dos={dos} uno={uno} />,
        document.querySelector("#app")
    );

    contador++;
}, 1000);
