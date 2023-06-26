import React from "react";

import axios from "axios"
import { useEffect, useState } from "react";
import PieChart from "../../components/Pie/Pie";
import { Navbar } from "../../layout/Navbar/Navbar";
import { Footer } from "../../layout/Footer/Footer";

export function MemoryPage(){
    const [memoryDatas, setMemoryDatas] = useState({});
    const [memorySize, setMemorySize] = useState({});
    
    useEffect(()=>{
      const interval = setInterval(()=>{
        try{
          axios.get("http://localhost:5500/memory")
          .then((response)=>{
            setMemoryDatas(response.data[1].value - response.data[0].value);
            setMemorySize(response.data[1].value);      
          })
          }catch(e){
            console.error(e.message)
          }       
      }, 3000)
      return () => clearInterval(interval);
    }, []) 

    const data ={
      labels: ['Full Memory', 'Memory Used'],
      datasets:[
        {
          labels: 'Memory ',
          data: [memorySize, memoryDatas],
          borderColor: 'black',
          backgroundColor: ['#2F4F4F', '#20B2AA',]
        }
      ]  
    }

    return (
      <div className="App">
        <Navbar />
        <PieChart data={data} title={"Controle de Mémoria Ram"}/>
        <Footer />
      </div>
    );
}