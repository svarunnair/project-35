import logo from './logo.svg';
import './App.css';
import PublicRoutes from './Routes/PublicRoutes';
import CoverImages from './Components/CoverImages';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { useLocation } from 'react-router-dom';

function App() {
  const path=useLocation()
  return (
    <div className="App">
   
      <Home/>
      <PublicRoutes/>
      {path.pathname!=="/"&&<Footer/>}
     
    </div>
  );
}

export default App;
