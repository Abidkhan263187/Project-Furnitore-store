import logo from './logo.svg';
import './App.css';
import PaymentPage from './componenets/cart/PaymentPage';
import Cart from './componenets/cart/Cart';
import UserInfo from './componenets/cart/UserInfo';

function App() {
  return (
    <div className="App">
      <Cart/>
   <UserInfo/>
   <PaymentPage/>
    </div>
  );
}

export default App;
