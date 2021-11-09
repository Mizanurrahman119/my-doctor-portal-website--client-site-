import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Shared/Home/Home/Home';
import Appointment from './Shared/Appointment/Appointment/Appointment';
import Login from './Shared/Login/Login/Login';
import Register from './Shared/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Shared/Login/PrivateRoute/PrivateRoute';
import Navigation from './Shared/Shere/Navigation/Navigation';
import Dashboard from './Shared/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
            <Navigation></Navigation>
              <Switch>
                <PrivateRoute path="/appointment">
                  <Appointment></Appointment>
                </PrivateRoute>

                <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>

                <Route path="/home">
                  <Home></Home>
                </Route>

                <Route path="/login">
                  <Login></Login>
                </Route>

                <Route path="/register">
                  <Register></Register>
                </Route>
                <Route exact path="/">
                  <Home></Home>
                </Route>

              </Switch>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
