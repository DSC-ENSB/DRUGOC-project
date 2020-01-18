import React  from 'react'
import db from '../firebase';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            eMail:'',
            PassWord:'',
            err : null
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const { name ,value } = event.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit(){
        db
        .auth()
        .signInWithEmailAndPassword(this.state.eMail, this.state.PassWord)
        .then(console.log('Succ login'))
        .catch(error => {
            this.setState({
                err : error.message
            })
          });
    }
    render(){
        return (
           <div >
               <form onSubmit={this.handleSubmit} method="POST" action="/home">
                   <div className={this.state.err==null?"hidden":"alert alert-danger"}>
                       {this.state.err}
                   </div>
                   <input type="email" 
                   name="eMail" 
                   value={this.state.eMail}
                   placeholder="E-mail"
                   onChange={this.handleChange}
                   required
                   />
                   <input type="password" 
                   name="PassWord" 
                   value={this.state.Password}
                   placeholder="Password"
                   onChange={this.handleChange}
                   required
                   />
                   <button>LOG IN</button>
               </form>
           </div>
        )
    }
} 

export default SignIn;