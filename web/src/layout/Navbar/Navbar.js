import { Link } from "react-router-dom";
import './Navbar.css'

export function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li className="link" >
                    <Link to ="/">Home</Link>
                </li>

                <li className="link" >
                    <Link to ="/memory">Memoria</Link>
                </li>
                
                <li className="link" >
                    <Link to ="/process">Processos</Link>
                </li>
                
                <li className="link" >
                    <Link to ="/protocolsInput">Protocolos de Rede - Entradas</Link>
                </li>
                
                <li className="link" >
                    <Link to ="/protocols">Todos os Protocolos de Rede</Link>
                </li>   
            </ul>
        </div>
    )
}