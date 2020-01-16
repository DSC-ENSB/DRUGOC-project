import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
//import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <SignIn />
      <SignUp />
    </React.Fragment>
  );
}

export default App;
