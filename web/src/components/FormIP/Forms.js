import React from "react";
import './Forms.css'

export function FormsIP(){
    return(
        <div className="page">
            <div className="cover">
                <h1> Informe o IP</h1>
                <form action="http://localhost:5500/IP" method="post">
                    <input classNametype="text" placeholder="127.0.0.1" defaultValue={"127.0.0.1"}/>
                    <button>Submit</button>
                </form>
               
            </div>
        </div>
    )
}   