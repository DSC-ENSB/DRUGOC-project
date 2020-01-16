import React ,{ Component } from 'react'
import Nav from './signupComp/Nav'
import Left from './signupComp/Left'
import Right from './signupComp/Right'
class SignUp extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <Nav />
                <Left />
                <Right />
            </div>
        )
    }
}
export default SignUp;