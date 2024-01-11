import logo from './logo.svg';
import './App.css';
import PublicRoutes from './Routes/PublicRoutes';
import CoverImages from './Components/CoverImages';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
   
      <Home/>
      <PublicRoutes/>
      <Footer/>
     
    </div>
  );
}

export default App;
