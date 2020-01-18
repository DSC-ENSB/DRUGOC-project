import React from 'react'
import Nav from './signupComp/Nav'
import Left from './signupComp/Left'
import Right from './signupComp/Right'
function SignUp(){
        return (
        <React.Fragment>
                <Nav />
            <div className="container h-100 g-ver-center--mdg-padding-y-100--xs">
                <div className="row d-flex align-items-center h-100 g-hor-centered-row--md g-margin-t-30--xs g-margin-t-20--sm"> 
                <Left />
                <div className="col-lg-2"></div>
                <Right />
                </div>
            </div>
        </React.Fragment>
        )
    }

export default SignUp;