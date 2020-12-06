import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivateRoute from "./components/ProtectedHOC/ProtectedRoute";
import Login from "./pages/Login/Login";
import CompanyLogos from "./components/CompanyLogos";
import CovidInfo from "./components/CovidInfo";
import AboutUs from "./components/AboutUs";
import { UserProvider } from "./context/userContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="MainBodyContainer">
          <Switch>
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>

            <Route exact path="/" component={(props) => <Login {...props} />} />
            <Route>
              <h1>404 NOT FOUND</h1>
            </Route>
          </Switch>
          <CompanyLogos />
          <CovidInfo />
          <AboutUs />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
