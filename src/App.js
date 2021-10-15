import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { NavBar } from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route
            exact
            path="/products/:categoryId"
          >
            <ItemListContainer />
          </Route>
          <Route exact path="/detail/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/about">
            <h1>About</h1>
          </Route>
          <Route exact path="/contact">
            <h1>Contact</h1>
          </Route>
          <Route exact path="/cart">
            <h1>Cart</h1>
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
