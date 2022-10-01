import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import NavbarComp from './components/NavbarComp';

const App = () => {
  return (
    <div className="App">
     <NavbarComp />
     <Header />
     <Products />
    </div>
  );
}

export default App;
