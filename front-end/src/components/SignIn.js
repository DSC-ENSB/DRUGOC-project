import React  from 'react'
import db from '../firebase';
import Left from './signupComp/Left'
import Nav from './Nav';



class SignIn extends React.Component {
    constructor(props){
        super(props);
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
    handleSubmit(event){
        event.preventDefault();
        db
        .auth()
        .signInWithEmailAndPassword(this.state.eMail, this.state.PassWord)
        .catch(error => {
            this.setState({
                err : error.message
            })
          });
    }
    render(){
        return (
            <React.Fragment>
            <Nav isClicked={false}/>
            <section className="flex-left-and-right">
            <Left />
           <div className={this.props.status?"log-in":'log-in'}>
               <h3>LOG IN</h3>
               <form onSubmit={this.handleSubmit} method="POST" action="/profile">
                   <div className={this.state.err===null?"hidden":"alert alert-danger"}>
                       {this.state.err}
                   </div>
                   <input type="email" 
                   name="eMail" 
                   value={this.state.eMail}
                   placeholder=" * E-mail"
                   onChange={this.handleChange}
                   required
                   />
                   <input type="password" 
                   name="PassWord" 
                   value={this.state.Password}
                   placeholder=" * Password"
                   onChange={this.handleChange}
                   required
                   />
                   <button className='btn'>LOG IN</button>
               </form>
           </div>
           </section>
           </React.Fragment>
        )
    }
} 

export default SignIn;