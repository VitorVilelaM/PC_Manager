import React, { useState } from "react";
import './Forms.css'
import axios from 'axios'

export function FormsIP(){

    const [text, setText] = useState('127.0.0.1');

    const handleChange = (event) => {
        setText(event.target.value);
      };

    function mudaNome(Ip){
        axios.post('http://localhost:5500/IP', {
            ip: text,
        });
    }

    return(
        <div className="page">
            <div className="cover">
                <h1> Informe o IP</h1>
                <form action="/" method="get">
                    <input className="text" placeholder="127.0.0.1" value={text} onChange={handleChange}/>
                    <button className="Submit" onClick={mudaNome}>Submit</button>
                </form>
               
            </div>
        </div>
    )
}   