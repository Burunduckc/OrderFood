//React
import {useState} from "react";
//Ui
import {Meal} from "./Layout/Meals";
import {MealAll} from "./Meals/MealAll";
import {Cart} from "./Cart/Cart";
import {CartProvider} from "./store/CartProvider";
//Component App
function App() {
    const [cartItShown, setCartShown] = useState(false)

    const showCart = () => {
        setCartShown(true)
    }

    const shownCart=()=>{
        setCartShown(false)
    }

  return (
    <CartProvider>
        {cartItShown && <Cart shotDown={shownCart}/>}
      <Meal onShow = {showCart} alt = 'table with food'/>
        <main>
            <MealAll/>
        </main>
    </CartProvider>
  );
}

export default App;
