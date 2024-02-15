import logo from './logo.svg';
import { Chart } from './chartcomponent/Chart';
import {Table } from './chartcomponent/table'
import { DoughnutChart } from './chartcomponent/Doughnut';
import Table2 from './tablecomponent/table2';
import AxiosApi from './apitotable/axiosapi';
import AxiosCall from './apitotable/apitotable2'
import './App.css';
import {Routes , Route, Router, Link} from 'react-router-dom';

function App() {
  return (
    <div className = "App">
          <div className='navbar'>
            <ul>
              <li>
                <Link to='/chart'>BarChart</Link>
              </li>
              <li>
                <Link to='/doughnut'>Doughnut</Link>
              </li>
              <li>
                <Link to='/table'>Table</Link>
              </li>
              <li>
                <Link to='/table2'>Table2</Link>
              </li>
              <li>
                <Link to='/api'>Api</Link>
              </li>
              <li>
                <Link to="api2">Api2</Link>
              </li>
            </ul>
          </div>
      
      <Routes> 
        <Route path = "/chart" element = {<Chart />}> </Route>
        <Route path = "/table" element={<Table />}> </Route>
        <Route path="/doughnut" element={<DoughnutChart />}></Route>
        <Route path="/table2" element={<Table2 />}></Route>
        <Route path="/api" element={<AxiosApi />}></Route>
        <Route path="/api2" element={<AxiosCall />}></Route>
      </Routes> 
      </div>
  );
}

export default App;
