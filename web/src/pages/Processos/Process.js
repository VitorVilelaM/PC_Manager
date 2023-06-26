
import axios from "axios";
import { useEffect, useState } from "react";
import { Footer } from "../../layout/Footer/Footer";
import { Navbar } from "../../layout/Navbar/Navbar";
import React from 'react';

export function ProcessPage(){
    const [numProcess, setNumProcess] = useState([]);
    const [text, setText] = useState([])

    useEffect(()=>{
        var date = new Date().toLocaleTimeString();
        const interval = setInterval(()=>{
          try{
            axios.get("http://localhost:5500/process")
            .then((response)=>{
                if(response != null){
                    setNumProcess([...numProcess, response.data[0].value])
                    setText([...text, date])
                }
            })
            }catch(e){
              console.error(e.message)
            }       
        }, 3000)
        return () => clearInterval(interval);

      }, [])

      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Numero de Processos',
      data: labels.map(() => numProcess),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

    return(
        <div className="process">
            <Navbar />
            <Footer />
        </div>
    )
}