
import './App.css';
import { Allroutes } from './componenets/AllRoutes/Allroutes';
import { Home } from './componenets/Home/Home';
import { Navbar } from './componenets/Home/Navbar';
import Login from './componenets/login_signup/Login';
import SignupPage from './componenets/login_signup/Signup';

function App() {
  return (
    <div className="App">
    <Navbar/>
   <Allroutes/>
    </div>
  );
}

export default App;
