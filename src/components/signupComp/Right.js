import React from 'react'
import db from '../../firebase'

class Right extends React.Component {
    constructor(){
        super();
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
            <div className="col-lg-4 col-sm-4">
                <h3>SIGN UP</h3>
                <div >
                    <form onSubmit={this.handleSubmit} method="POST" className="center-block width-350--xs bg-color--white-opacity-lightest g-box-shadow__blueviolet-v1 g-padding-x-40--xs g-padding-y-60--xs g-radius--4">
                    <div className={this.state.err==null?"hide-alert":"alert alert-danger"}>{this.state.err}</div>
                    <input 
                    name="Email"
                    type="email"
                    value={this.state.Email}
                    placeholder="Email"
                    onChange={this.handleChange}
                    required
                    />
                    <input
                    name="Password"
                    type="password"
                    value={this.state.Password}
                    placeholder="Password"
                    onChange={this.handleChange}
                    required
                    />
                    <button>SIGN UP</button>
                    </form>
                    <h4>{this.state.Email}</h4>
                    <h4>{this.state.Password}</h4>
                </div>
            </div>
        )
    }
}
export default Right;