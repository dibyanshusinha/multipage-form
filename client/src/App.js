import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Register from './pages/Register';
import Signup from './pages/Registerpart2';
import Dashboard from './pages/dashboard'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <div className="">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="menu">
                  <NavLink activeClassName="active" exact to="/">Sign Up</NavLink>
                  <NavLink activeClassName="active" exact to="/dashboard">Dashboard</NavLink>
                </div>
              </div>
            </nav>
          </header>
          <main>
          <Switch>
            <Route path="/signup" component={Signup}  />
            <Route path="/dashboard" component={Dashboard}  />
            <Route exact path="/" component={Register} />
            <Route exact path="/404" render={() => <h1>Not Found !</h1>} />
            <Route render={() => <Redirect to="/404" /> } />
          </Switch>
            
          </main>
          <footer>

          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
