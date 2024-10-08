import Konyv from "./Konyv.js"
import { konyvLista } from "../Adat.js";
import React from "react";

function Tartalom(){
    return(
    <React.Fragment>
    
    {
        konyvLista.map((elem, index)=> {
            return <Konyv konyvAdat={elem} key={index}/>;
        })
    }
    </React.Fragment>
    )
}

export default Tartalom;