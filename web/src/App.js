import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { MemoryPage } from './pages/Memoria/Memory'
import { ProcessPage } from './pages/Processos/Process'
import { InputsProtocolPage } from './pages/Protocolos/InputProtocols'
import { AllProtocolsPage } from './pages/Protocolos/AllProtocols'
import { Home } from './pages/Inicio/Home'

export default function App() {
  return(
    <div className='App'>
  <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home />}/>
      <Route exact path='/memory' element={<MemoryPage />}/>
      <Route exact path='/process' element={<ProcessPage />}/>
      <Route exact path='/protocolsInput' element={<InputsProtocolPage />}/>
      <Route exact path='/protocols' element={<AllProtocolsPage />}/>
    </Routes>
  </BrowserRouter>
    </div>
  )
}