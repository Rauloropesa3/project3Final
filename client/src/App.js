import React, { useEffect } from "react";
import { LandingPage } from './LandingPage/LandingPage';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import {Search} from './Search/Search';
import PrivateRoute from "./components/ProtectedHOC/ProtectedRoute";
import Login from "./pages/Login/Login";
import CompanyLogos from "./components/CompanyLogos";
import CovidInfo from "./components/CovidInfo";
import AboutUs from "./components/AboutUs";
import { UserProvider } from "./context/userContext";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="MainBodyContainer">
          <Switch>
            <PrivateRoute path="/LandingPage">
              <LandingPage />
            </PrivateRoute>

            <Route exact path="/" component={(props) => <LandingPage {...props} />} />
            <Route path='/search' component={Search}/>
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