import { Navbar } from "./componentes/Navbar/Navbar";
import "./Style/Style.css";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer.js";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CartProvider } from "./context/newContext";
import { CartScreen } from "./componentes/CartScreen/CartScreen.js";
import { UIContextProvider } from "./context/UIContext.js"
import { Checkout } from "./componentes/Checkout/Checkout.js"

function App() {
  return (
    <>
      <UIContextProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />

            <Switch>
              <Route exact path="/">
                <ItemListContainer />
        
              </Route>

              <Route exact path="/category/:catId">
                <ItemListContainer />
        
              </Route>

              <Route exact path="/detail/:itemId">
                <ItemDetailContainer />
    
              </Route>

              <Route exact path="/cart">
                <CartScreen />
              </Route>

              <Route exact path="/Checkout">
                <Checkout />
              </Route>

              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </UIContextProvider>
    </>
  );
}

export default App;
