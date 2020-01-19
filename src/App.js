import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
//import Home from './components/Home';
import Nav from './components/Nav';
//import { BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
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
    <React.Fragment>
      <Nav handleclick={this.handleclick} isClicked={this.state.isClicked}/>
      <SignUp isClicked={this.state.isClicked}/>    
    </React.Fragment>
  );
}
}

export default App;
