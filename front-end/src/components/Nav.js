import React , { Component} from 'react'
import { BrowserRouter as Router,Link} from "react-router-dom";

class Nav extends Component{
    render(){
        return(
            <header>
                <div className="flex-nav">
                    <div className="flex-nav-right" style={{fontSize:32}}>DRUGOC</div>
                    <div className="flex-nav-left">
                        {this.props.isClicked?
                        <Link to="/sign-up"><button 
                        onClick={this.props.handleclick}
                        id="log-btn" 
                        style={{color:'white',backgroundColor:'transparent',border:'none'}}>
                        SIGN UP
                        </button>
                        </Link>:
                        <Link to="/log-in">
                        <button 
                        onClick={this.props.handleclick}
                        id="log-btn" 
                        style={{color:'white',backgroundColor:'transparent',border:'none'}}>
                        LOG IN
                        </button>
                        </Link>
                        }
                    </div>
                </div>
            </header>
        )
    }
}
export default Nav;