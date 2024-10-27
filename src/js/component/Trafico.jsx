import React, { useState } from 'react';


const Trafico = () => {
    const [colorActual, setColorActual] = useState("red"); 
    const [purpuraVisible, setPurpuraVisible] = useState(false); 

  
    const alternarColor = () => {
        if (colorActual === "red") {
            setColorActual("yellow");
        } else if (colorActual === "yellow") {
            setColorActual("green");
        } else if (colorActual === "green") {
            setColorActual(purpuraVisible ? "purple" : "red");
        } else if (colorActual === "purple") {
            setColorActual("red"); // 
        }
    };

  
    const alternarPurpura = () => {
        setPurpuraVisible(!purpuraVisible);
        if (colorActual === "purple") {
            setColorActual("red"); 
        }
    };

    return (
        <div className="trafico">
            <h2>Semáforo</h2>
            <div 
                className={`luz red ${colorActual === 'red' ? 'encendida' : ''}`} 
                onClick={() => setColorActual("red")}
            ></div>
            <div 
                className={`luz yellow ${colorActual === 'yellow' ? 'encendida' : ''}`} 
                onClick={() => setColorActual("yellow")}
            ></div>
            <div 
                className={`luz green ${colorActual === 'green' ? 'encendida' : ''}`} 
                onClick={() => setColorActual("green")}
            ></div>
            {purpuraVisible && (
                <div 
                    className={`luz purple ${colorActual === 'purple' ? 'encendida' : ''}`} 
                    onClick={() => setColorActual("purple")}
                ></div>
            )}
            <button onClick={alternarColor} className="boton-cambiar">Alternar Color</button>
            <button onClick={alternarPurpura} className="boton-cambiar">Alternar Púrpura</button>
        </div>
    );
};

export default Trafico;


