import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
