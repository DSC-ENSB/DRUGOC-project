import React  from 'react'
import db from '../../firebase'

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
    }
    handleChange(event){
        const { name , value } = event.target
        this.setState({
            [name] : value
        })
    }
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
            <div className={this.props.status?'hide '+"flex-signup":'flex-signup'}>
                <h3>SIGN UP</h3>
                <div >
                    <form onSubmit={this.handleSubmit} method="POST">
                    <div className={this.state.err==null?"hide-alert":"alert alert-danger"}>{this.state.err}</div>
                    <input 
                    name="Email"
                    type="email"
                    value={this.state.Email}
                    placeholder=" * Email"
                    onChange={this.handleChange}
                    required
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
                    <button id="btn">SIGN UP</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Right;