import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
import Home from './components/Home';
import Nav from './components/Nav';
import Active from './components/Active';
import Profile from './components/Profile';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import db from './firebase'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isClicked : false,
      authenticated: false,
      loading: true
    }
    this.handleclick = this.handleclick.bind(this);
  }
  componentDidMount() {
    this.removelistener = db.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }
  handleclick(){this.setState(prevState => ({isClicked : !prevState.isClicked}) )}

  render() {
  return (
    <div>
      <Router>
      <Nav handleclick={this.handleclick} isClicked={this.state.isClicked}/>
      
        <Switch>
          
          <Route exact path='/home'>
            <Home /> 
          </Route>
          <Route exact path='/activate'>
            <Active />
          </Route>
          <PrivateRoute path="/profile" authenticated={this.state.authenticated} component={Profile}></PrivateRoute>
          <PublicRoute path="/sign-up"  authenticated={this.state.authenticated} component={SignUp} status={this.state.isClicked}></PublicRoute>
          <PublicRoute path="/"  authenticated={this.state.authenticated} component={SignUp} status={this.state.isClicked}></PublicRoute>
          <PublicRoute path="/log-in"   authenticated={this.state.authenticated} component={SignIn} status={this.state.isClicked}></PublicRoute>
          
           </Switch>
      </Router> 
    </div>
  );
}

}

export default App;
