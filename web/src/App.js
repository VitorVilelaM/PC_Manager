import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { MemoryPage } from './pages/Memoria/Memory'
// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";
// import { useStates } from "react"; 
// import { Data } from "./Data";

// import PieChart from "./components/Pie";
// import { BarChart } from "./components/Bar";
// import LineChart from "./components/Line";
// import Teste from "./TesteAxios";
// Chart.register(CategoryScale);

export default function App() {
  return(
    <div className='App'>
  <BrowserRouter>
    <Routes>
      <Route exact path='/memory' element={<MemoryPage />}/>
    </Routes>
  </BrowserRouter>
    </div>
  )
}

/*const [data, setData] = useState([]);
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Loss ",
            data: Data.map((data) => data.userLost),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
      */