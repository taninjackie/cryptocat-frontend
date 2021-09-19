import './App.css';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
//import Trading from './pages/Trading';
import {
  BrowserRouter as Router
  , Switch
  , Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ height: "inherit", width: "inherit", justifyContent: 'center', alignItems: 'center' }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
