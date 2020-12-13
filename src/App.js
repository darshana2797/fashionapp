import { Route, Router } from "react-router-dom";
import ProductList from "../src/containers/ProductListing";
import UserDetails from "../src/containers/UserDetails";
import UserList from "../src/containers/UserList";
import UserLogin from "../src/containers/UserLogin";
import "../src/CSS/styles.css";
import "./App.css";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/users" component={UserList} />
      <Route exact path="/user-details" component={UserDetails} />
      <Route exact path="/products" component={ProductList} />
    </Router>
  );
}

export default App;
