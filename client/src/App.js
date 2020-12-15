import React, { useEffect } from "react";
import { LandingPage } from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Search } from "./Search/Search";
import { Reserve } from "./reserve/reserve";
import PrivateRoute from "./components/ProtectedHOC/ProtectedRoute";
import Login from "./pages/Login/Login";
import CompanyLogos from "./components/CompanyLogos";
import CovidInfo from "./components/CovidInfo";
import AboutUs from "./components/AboutUs";
import { UserProvider } from "./context/userContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { LandingPage } from "./LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="MainBodyContainer">
          <Switch>
            <PrivateRoute path="/pages/Login/Login.js">
              <Login />
            </PrivateRoute>
            <Route exact path="/" component={(props) => <Login {...props} />} />
                        
            <Route path="/pages/Login/Login.js" comoponent={Login} />
            <Route path="/search" component={Search} />
                          
            <Route exact path="/landingpage" component={LandingPage} />
                        
            <LandingPage />
            <Route path="/reserve" component={Reserve} />
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
