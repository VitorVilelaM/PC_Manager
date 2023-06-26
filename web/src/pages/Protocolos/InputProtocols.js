import React from "react";

import axios from "axios"
import { useEffect, useState } from "react";
import { Navbar } from "../../layout/Navbar/Navbar";
import { Footer } from "../../layout/Footer/Footer";
import { DoughnutBar } from "../../components/DoughnutBar/Doughnut";

export function InputsProtocolPage(){
    const [ipInput, setIP] = useState({});
    const [tcpInput, setTCP] = useState({});
    const [udpInput, setUDP] = useState({});
    
    useEffect(()=>{
      const interval = setInterval(()=>{
        try{
          axios.get("http://localhost:5500/protocolsInput")
          .then((response)=>{
            setIP(response.data[0].value)
            setTCP(response.data[1].value)
            setUDP(response.data[2].value)   
          })
          }catch(e){
            console.error(e.message)
          }       
      }, 3000)
      return () => clearInterval(interval);
    }, []) 

    const data = {
        labels: ['IP', 'TCP', 'UDP'],
        datasets: [
          {
            label: 'Numero de Protocolos recebidos',
            data: [ipInput, tcpInput, udpInput],
            backgroundColor: [
              '#3CB371',
              '#20B2AA',
              '#2F4F4F',
            ],
            borderColor: [
              '#2E8B57',
              '#2E8B57',
              '#2E8B57',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
      <div className="App">
        <Navbar />
        <DoughnutBar data={data} title={"Número de Protocolos IP/TCP/UDP recebidos"}/>
        <Footer />
      </div>
    );
}