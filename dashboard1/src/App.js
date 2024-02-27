import { BrowserRouter } from 'react-router-dom';
import Dashboard from './DashboardComponents/Dashboard';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App bg-dark" style={ {padding:"15px 15px 15px 15px"}}>
      <div className="border border-success rounded " style={{backgroundColor:"rgb(1,1,1)", justifyContent:"center", alignItems:"center", maxWidth:"100%"}}>
      <NavBar title="DashBoard"/>
      <hr></hr>
    
      <Dashboard/>
      </div>
      
    </div>
    </BrowserRouter>
  )
}

export default App;
