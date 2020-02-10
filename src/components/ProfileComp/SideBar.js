import React ,{ Component } from "react";
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import {FaUserCircle ,FaRegEdit,FaSignOutAlt ,FaRegBell} from "react-icons/fa";

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
                    <li title="Update Your Personal Information">
                    <FaUserCircle /> 
                    </li>
                    </Link>
                    <li>
                        <FaRegBell />
                    </li>
                    <li>
                        <FaRegEdit onClick={this.RaisePharma}/>
                    </li>
                </ul>
                    
                        <FaSignOutAlt 
                        id="lst_child" 
                        title="Sign Out" 
                        onClick={this.signOut}/>
                    
            </div>
        )
    }
}
export default SideBar;