import React from 'react'
import Left from './signupComp/Left'
import Right from './signupComp/Right'
import Nav from './Nav';

function SignUp(props){
        return (
        <React.Fragment>
                <Nav isClicked={true}/>
                <div className="flex-left-and-right">
                <Left />
                <Right/> 
                </div>
        </React.Fragment>
        )
    }

export default SignUp;