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
        pharma.style.display = "flex"
        
    }
    render(){
        return(
            <div className="side-bar">
                <Link to='/home'>
                    <FaUserCircle 
                    title="Update Your Personal Information"
                    className="child st_child"
                    /> 
                </Link>
                <ul>
                    <li>
                        <FaRegBell 
                        title="See Some Notification"
                        />
                    </li>
                    <li>
                        <FaRegEdit 
                        title="Sumbit New Drug"
                        onClick={this.RaisePharma}/>
                    </li>
                </ul>
                    <FaSignOutAlt 
                    className="child lst_child" 
                    title="Sign Out" 
                    onClick={this.signOut}/>
            </div>
        )
    }
}
export default SideBar;