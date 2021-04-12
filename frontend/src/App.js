import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateExperience from './components/CreateExperience';


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

          <Route path="/create-experience">
          <Header />
            <CreateExperience />
          <Footer />
          </Route>

          <Route path="/">
          <Header />
            <Home />
          <Footer />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
