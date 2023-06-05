
import './App.css';
import { Allroutes } from './componenets/AllRoutes/Allroutes';
import { Navbar } from './componenets/Home/Navbar';
function App() {
  return (
    <div className="App">
   {/* <Nav2/> */}
   <Navbar/>
   <Allroutes/>
    </div>
  );
}

export default App;
