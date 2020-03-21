import React from 'react'
import db from '../firebase'

class Active extends React.Component {
    componentWillMount(){
    let user = db.auth().currentUser;
    user?console.log(user):console.log('Log In')
    user.sendEmailVerification().then(function() {
    console.log('Email Has been Sent')
    }).catch(function(error) {
    console.log('somthing went wrong'); 
    });
    }
    render(){
    return(
        <div>
        <h4>An Email Has Been Sent Active Your Account</h4>
        </div>
    )
    }
}
export default Active;