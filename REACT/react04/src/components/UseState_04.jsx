import React from "react";
import './UseState_04.css';
import UseState_04a from "./UseState_04a";

export default () => {
    return (
        <>
            <h1>Exercício 02</h1>
            <div className="layout">
                <UseState_04a unidades={1}/>
                <UseState_04a unidades={5}/>
                <UseState_04a unidades={10}/>
            </div>
        </>
    )
}