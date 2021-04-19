import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateExperience from './components/CreateExperience';
import DigitalJournaling from './components/DigitalJournaling';
import CreateJournal from './components/CreateJournal';
import AllJournals from './components/AllJournals';
import AllExperiences from './components/AllExperiences';
import ExperienceById from './components/ExperienceById';
import LovelyExperience from './components/LovelyExperience';
import EmotionalExperience from './components/EmotionalExperience';
import HappyExperience from './components/HappyExperience';


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

          <Route path="/experiences/emotional">
          <Header />
            <EmotionalExperience />
          <Footer />
          </Route>

          <Route path="/experiences/happy">
          <Header />
            <HappyExperience />
          <Footer />
          </Route>

          <Route path="/experiences/lovely">
          <Header />
            <LovelyExperience />
          <Footer />
          </Route>

          <Route path="/experiences/:id">
          <Header />
            <ExperienceById />
          <Footer />
          </Route>

          <Route path="/experiences">
          <Header />
            <AllExperiences />
          <Footer />
          </Route>

          <Route path="/digital-journaling/entries">
          <Header />
            <AllJournals />
          <Footer />
          </Route>

          <Route path="/digital-journaling/new">
            <CreateJournal />
          </Route>

          <Route path="/digital-journaling">
            <DigitalJournaling />
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
