import axios from "axios";
import { useEffect, useState } from "react";
import { RadarBar } from "../../components/RadarBar/Radar";
import { Navbar } from "../../layout/Navbar/Navbar";
import { Footer } from "../../layout/Footer/Footer";

export function AllProtocolsPage(){
    const [ipInput, setIP1] = useState({});
    const [tcpInput, setTCP1] = useState({});
    const [udpInput, setUDP1] = useState({});
    const [ipOutput, setIP2] = useState({});
    const [tcpOutput, setTCP2] = useState({});
    const [udpOutput, setUDP2] = useState({});
    
    useEffect(()=>{
      const interval = setInterval(()=>{
        try{
          axios.get("http://localhost:5500/protocols")
          .then((response)=>{
            setIP1(response.data[0].value)
            setTCP1(response.data[1].value)
            setUDP1(response.data[2].value)
            setIP2(response.data[3].value)  
            setTCP2(response.data[4].value)  
            setUDP2(response.data[5].value)     
          })
          }catch(e){
            console.error(e.message)
          }       
      }, 3000)
      return () => clearInterval(interval);
    }, []) 
    
    const data = {
        labels: ['IP in', 'TCP in', 'UDP in', 'IP out', 'TCP out', 'UDP out'],
        datasets: [
          {
            label: '# de Datagramas',
            data: [ipInput, tcpInput, udpInput, ipOutput, tcpOutput, udpOutput],
            backgroundColor: '#20B2AA',
            borderColor: '#2F4F4F',
            borderWidth: 3,
          },
        ],
      };

    return(
        <div className="App">
            <Navbar />
            <RadarBar data={data} title={"Número de Protocolos IP/TCP/UDP passando pelo meu PC"}/>
            <Footer />  
        </div>
    )
}

// data radar
