import React , { Component} from 'react'
//import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class Nav extends Component{
    render(){
        return(
            <header>
                <div className="flex-nav">
                    <div className="flex-nav-right" style={{fontSize:32}}>CNPM</div>
                    <div className="flex-nav-left">
                        <button 
                        onClick={this.props.handleclick}
                        id="log-btn" 
                        style={{color:'white',backgroundColor:'transparent',border:'none'}}>
                        {this.props.isClicked?'SIGN UP':'LOG IN'}
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}
export default Nav;