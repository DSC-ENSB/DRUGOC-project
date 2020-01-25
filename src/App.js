import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Nav from './components/Nav';
import Active from './components/Active';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isClicked : false
    }
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick(){this.setState(prevState => ({isClicked : !prevState.isClicked}) )}
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
          <Route>
            <Active />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}
}

export default App;
