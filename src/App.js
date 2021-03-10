import React, { useContext, setState } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {AuthContext} from './contexts/Auth-Context'
import Dashboard from "./pages/Dashboard";
import GuardedRoute from "./components/GuardedRoute";

function App() {
  const [isLogged,contextItems] = useContext(AuthContext);


  return (
   
      <Router>
        <div className="App">
          <NavbarComponent />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <GuardedRoute
              path="/dashboard"
              component={Dashboard}
              auth={isLogged}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
   
  );
}

export default App;
