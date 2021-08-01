import logo from './logo.svg';
import './App.css';
import { MainNavbar } from './MyComponents/MainNavbar';
import { Welcome } from './MyComponents/Welcome';
import { Route } from 'react-router-dom';
import { Product } from './MyComponents/Product';
import { ProductDetail } from './MyComponents/ProductDetail';

function App() {
  return (
    <div className="container">
      <MainNavbar/>

      <Route path="/welcome">
      <Welcome/>
      </Route>
      <Route path="/product">
        <Product/>
      </Route>
      <Route path="/product-detail">
        <ProductDetail/>
      </Route>
    </div>
  );
}

export default App;
