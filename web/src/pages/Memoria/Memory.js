import React from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import PieChart from "../../components/Pie";

export function MemoryPage(){
    const [memoryDatas, setMemoryDatas] = useState({});
    const [memorySize, setMemorySize] = useState({});
    
    async function fetchData(){
      try{
        axios.get("http://localhost:5500/memory")
        .then((response)=>{
          setMemoryDatas(response.data[0].value);
          setMemorySize(response.data[1].value);      
        })
        }catch(e){
          console.error(e.message)
        }  
    }
    
    useEffect(()=>{
      fetchData();
    }, []) 

    const data ={
      labels: ['Full Memory', 'Memory Used',],
      datasets:[
        {
          labels: 'Sales',
          data: [memorySize, memoryDatas],
          borderColor: 'black',
          backgroundColor: ['red', 'aqua',]
        }
      ]  
    }

    return (
      <div className="App">
        <PieChart data={data} title={"Controle de Mémoria Ram"}/>
      </div>
    );
}