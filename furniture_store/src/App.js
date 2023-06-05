import logo from './logo.svg';
import './App.css';
import PaymentPage from './componenets/cart/PaymentPage';
import Cart from './componenets/cart/Cart';
import UserInfo from './componenets/cart/UserInfo';
import ItemDescription from './products/ItemDescription';
import { Navbar } from './componenets/Home/Navbar';
import { Allroutes } from './AllRoutes/AllRoutes';
import Product from './products/product';

function App() {
  return (
    <div className="App">
       
      <Cart/>
   
    </div>
  );
}

export default App;
