import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Nav from './components/Nav';
import Active from './components/Active';
import Profile from './components/Profile';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isClicked : false
    }
    this.handleclick = this.handleclick.bind(this);
    //this.PrivateRoute = this.PrivateRoute.bind(this);
  }
  handleclick(){this.setState(prevState => ({isClicked : !prevState.isClicked}) )}
  /* PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  } */
  render() {
  return (
    <div>
      <Router>
      <Nav handleclick={this.handleclick} isClicked={this.state.isClicked}/>
      
        <Switch>
          <Route exact path="/">
              <SignUp isClicked={this.state.isClicked}/>  
          </Route>
          <Route exact path='/home'>
            <Home /> 
          </Route>
          <Route exact path='/activate'>
            <Active />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

}

export default App;
