import React ,{ Component } from "react";
import firebase from '../../firebase';
import { Link } from 'react-router-dom'

class SideBar extends Component{
    constructor(){
        super();
        this.signOut = this.signOut.bind(this)
        this.RaisePharma = this.RaisePharma.bind(this)
    }
    signOut(){
    firebase
    .auth()
    .signOut()
    .catch(function(error) {
        console.log(error)
      });
    }
    RaisePharma(){
        const pharma =document.getElementsByClassName('raised')[0];
        //const intro = document.getElementsByClassName('Intro')[0];
        pharma.style.display = "block"
        
    }
    render(){
        return(
            <div className="side-bar">
                <ul>
                    <Link to='/home'>
                    <li>Update </li>
                    </Link>
                    <li><button onClick={this.RaisePharma}>add</button> </li>
                    <li><button onClick={this.signOut}>signOut</button></li>
                </ul>
            </div>
        )
    }
}
export default SideBar;