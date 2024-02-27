import { Chart } from './chartcomponent/Chart';
import {Table } from './chartcomponent/table'
import { DoughnutChart } from './chartcomponent/Doughnut';
import Table2 from './tablecomponent/table2';
import AxiosApi from './apitotable/axiosapi';
import AxiosCall from './apitotable/apitotable2'
import MainApiComponent from './apitotable/tableSPcsv';
import Api4 from './apitotable/api4';
import './App.css';
import {Routes , Route, Router, Link, BrowserRouter} from 'react-router-dom';
import ModalForm from './apitotable/modalform';
import ReactForm from './apitotable/reactForm';


function App() {
  return (
    <>
    <BrowserRouter>
    <div className = "App">
          <div className='navbar'>
            <ul>
              <li className='homeLink btn btn-dark'>
                <Link to='/chart'>BarChart</Link>
              </li>
              <li className='homeLink btn btn-dark'>
                <Link to='/doughnut'>Doughnut</Link>
              </li>
              <li className='homeLink btn btn-dark'>
                <Link to='/table'>Table</Link>
              </li>
              <li className='homeLink btn btn-dark'>
                <Link to='/table2'>Table2</Link>
              </li>
              <li className='homeLink btn btn-dark'>
                <Link to='/api'>Api</Link>
              </li>
              <li className='homeLink btn btn-dark'>
                <Link to="api2">Api2</Link>
              </li>
              <li className='homeLink btn btn-dark'>
                <Link to = 'api4'>Api4</Link>
              </li>
              {/* <li>
                <Link to='/modal'>modal</Link>
              </li>
              <li>
                <Link to='/reactForm'>React Form</Link>
              </li> */}
            </ul>
          </div>
      
      <Routes> 
        <Route path = "/chart" element = {<Chart />}> </Route>
        <Route path = "/table" element={<Table />}> </Route>
        <Route path="/doughnut" element={<DoughnutChart />}></Route>
        <Route path="/table2" element={<Table2 />}></Route>
        <Route path="/api" element={<AxiosApi />}></Route>
        <Route path="/api2" element={<AxiosCall />}></Route>
        <Route path='/api4' element={<Api4 />}></Route>
        {/* <Route path='/modal' element={<ModalForm />}></Route>
        <Route path='/reactForm' element={<ReactForm />}></Route> */}
      </Routes> 
      </div>
      </BrowserRouter>
      </>
  );
}

export default App;
