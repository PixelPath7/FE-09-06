import { useState } from "react";
import ampolleta from './assets/Img/ampolleta.png'
import ampolleta_apa from './assets/Img/ampolleta_apa.png'

function Interruptor() {
    const [contador, setContador] = useState(0);

    function manejoInterruptor() {
        if (contador === 0){
            setContador(1)
        }
        else{
            setContador(0)
        }
    }

    return (
        <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>Ampolleta</h2> 
            <img src={contador === 0 ? ampolleta_apa : ampolleta} alt={contador === 0 ? "Ampolleta Apagada" : "Ampolleta Encendida"} 
                style={{width: "100px", marginBottom: "20px"}}/>
            <div>
                <button onClick={manejoInterruptor} style={{ margin: "5px" }}>{contador === 0 ? "Encender" : "Apagar"}</button>
            </div>
        </div>
    );
}

export default Interruptor;