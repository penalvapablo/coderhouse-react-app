import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { NavBar } from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';
import { CartProvider } from './context/CartContext.js';
import { CartScreen } from './components/CartScreen/CartScreen.js';
import { UIProvider } from './context/UIContext.js';
import { Checkout } from './components/Checkout/Checkout.js';

function App() {
  return (
    <>
      <UIProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />

            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route exact path="/products/:categoryId">
                <ItemListContainer />
              </Route>
              <Route exact path="/detail/:itemId">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/about">
                <h1>About</h1>
              </Route>
              {/* <Route exact path="/contact">
                <LoaderView />
              </Route> */}
              <Route exact path="/cart">
                <CartScreen />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;
