
import './App.css';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProductScreen from './pages/ProductScreen';
import CartScreen from './pages/CartScreen';
import OrderScreen from './pages/OrderScreen';
import Footer from './components/Footer'
function App() {
  return (
    <Router >
      <Header/>
    <Route exact path='/' component={HomeScreen}/>
    <Route path='/product/:id' component={ProductScreen}/>
    <Route path='/cart' component={CartScreen}/>
    <Route path='/order/:id' component={OrderScreen}/>
    <Footer/>
    </Router>
  );
}

export default App;
