import React , { Component} from 'react'
import db from '../firebase'

class Home extends Component{
    constructor(){
        super();
        this.database = db.database();
        this.state = {
            FullName:'',
            password:'',
            Email:'',
            PhoneNumber:'',
            isPrivate: false,
            HosptName:'',
            Speciality:''
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.writeUserData = this.writeUserData.bind(this)
    }
    handleChange(event){
        const { name , value,type ,checked} = event.target;
        type == "checkbox"?this.setState({[name]:checked}):this.setState({[name] : value})}
    handleSubmit(){
        this.writeUserData(this.state.FullName,this.state.password,this.state.email,this.state.PhoneNumber)
        
    }
    writeUserData(userId, name, passwd,mail, Phone) {
          this.database.ref('Doctors/' + userId).set({
          username: name,
          psword:passwd,
          email: mail,
          PhoneNumber :Phone 
        });
      }
    render(){
        let classStyle = !this.state.isPrivate?"isActive":"isNotActive";
        return(
            <form onSubmit={this.handleSubmit} action="/" method="POST">
                <input
                style={{margin:'5px'}}
                type="text" 
                name ="FullName"
                placeholder="Full Name"
                value={this.state.FullName}
                onChange={this.handleChange}
                />
                
                <input
                style={{margin:'5px'}}
                type="email" 
                name ="Email"
                placeholder="E-mail"
                value={this.state.Email}
                onChange={this.handleChange}
                />
                <input
                style={{margin:'5px'}}
                type="password" 
                name ="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                />
                
                <input
                style={{margin:'5px'}}
                type="number" 
                maxLength={"10"}
                name ="PhoneNumber"
                placeholder="Phone Number"
                value={this.state.PhoneNumber}
                onChange={this.handleChange}
                />
                <label>Is Private :</label>
                <input
                style={{margin:'5px'}}
                type="checkbox" 
                name ="isPrivate"
                placeholder="Work place"
                checked={this.state.isPrivate}
                onChange={this.handleChange}
                />
                <input
                style={{margin:'5px'}}
                className={classStyle}
                type="text" 
                name ="HosptName"
                placeholder="Hospital Name"
                value={this.state.HosptName}
                onChange={this.handleChange}
                />
                <input
                style={{margin:'5px'}}
                className={classStyle}
                type="text" 
                name ="Speciality"
                placeholder="Speciality"
                value={this.state.Speciality}
                onChange={this.handleChange}
                />
                <button>Submit</button>
                <h1>{this.state.Email}</h1>
            </form>
        )
    }
}
export default Home;