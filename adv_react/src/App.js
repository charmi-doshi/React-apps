import logo from './logo.svg';
import './App.css';
import { MainNavbar } from './MyComponents/MainNavbar';
import { Welcome } from './MyComponents/Welcome';
import { Product } from './MyComponents/Product';

function App() {
  return (
    <>
    <div className="container">
      <MainNavbar>
        <Route path="/welcome">
          <Welcome/>          
        </Route>
        <Route path="/product">
          <Product/>
        </Route>
        <Route path="/product-detail/:productId/:productName">
          <ProductDetail/>
        </Route>
      </MainNavbar>
    </div>
    </>
  );
}

export default App;
