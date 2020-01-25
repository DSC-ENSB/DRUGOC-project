import React  from 'react'
import db from '../../firebase'
import { Link } from 'react-router-dom'

class Right extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Email : '',
            Password :'',
            err:null
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)   
    //this.sendEmail = this.sendEmail.bind(this) 
    }
    handleChange(event){
        const { name , value } = event.target
        this.setState({
            [name] : value
        })
    }
    /* async sendEmail(){
        let user = db.auth().currentUser;
        user?console.log(user):console.log('He shouled Login');
        user.sendEmailVerification().then(function() {
            console.log('Email Have been Sent ')
          }).catch(function(err){
              console.log(err)
        })
    } */
    handleSubmit(){
        db
        .auth()
        .createUserWithEmailAndPassword(this.state.Email, this.state.Password)
        .catch(function(error) {
            this.setState({
                err:error.message
            })
        });
    }
    render (){
        return ( 
            <div className={this.props.status?"hide flex-signup":'flex-signup'}>
                <h3>SIGN UP</h3>
                <h4>{this.state.err}</h4>
                <div >
                    <form onSubmit={this.handleSubmit} method="POST">
                    <div className={this.state.err==null?"hide-alert":"alert alert-danger"}>{this.state.err}</div>
                    <input 
                    name="Email"
                    type="email"
                    value={this.state.Email}
                    placeholder=" * Email"
                    onChange={this.handleChange}
                    required="on"
                    autoFocus="on"
                    />
                    <br></br>
                    <input
                    name="Password"
                    type="password"
                    value={this.state.Password}
                    placeholder=" * Password"
                    onChange={this.handleChange}
                    required
                     />
                     <br></br>
                     <Link to='/activereq'>
                    <button id="btn">SIGN UP</button>
                    </Link>
                    </form>
                </div>
            </div>
        )
    }
}
export default Right;