import './App.css';
import Cart from './Components/Cart/Cart';
import Clothes from './Components/ClothComponents/Clothes';
import AllCategories from './Components/Filter/AllCategories';



function App() {
  return (
    <div className="App">
      <div className="blog">
        <AllCategories />
        <Cart />
      </div>
      <div className="blog">
        <Clothes />
      </div>
    </div>
  );
}

export default App;
