import './App.css';
import Home from './pages/Home'
//import Trading from './pages/Trading';
import DemoAccount from './pages/DemoAccount';
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
            <DemoAccount />
          </Route>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
