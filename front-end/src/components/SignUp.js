import React from 'react'
import Left from './signupComp/Left'
import Right from './signupComp/Right'
import SignIn from './SignIn'
function SignUp(props){
        return (
        <React.Fragment>
                <div className="flex-left-and-right">
                <Left />
                <SignIn status={props.isClicked}/>
                <Right status={props.isClicked}/> 
                </div>
        </React.Fragment>
        )
    }

export default SignUp;