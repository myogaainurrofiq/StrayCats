import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { Provider } from "react-redux";
import store from "./store/store";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import TopNav from "./components/TopNav";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <TopNav/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/products/:id" component={Product} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/cart" component={Cart} />
            <Route path="/profile" component={Profile} exact />
          </Switch>
        </div>
        <Nav />
      </Router>
    </Provider>
  );
}

export default App;
