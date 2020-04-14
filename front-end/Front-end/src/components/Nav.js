import React , { Component} from 'react'
import { Link} from "react-router-dom";

class Nav extends Component{
    render(){
        return(
            <header>
                <div className="flex-nav">
                    <div className="flex-nav-right" style={{fontSize:32}}>DRUGOC</div>
                    <div className="flex-nav-left">
                        {this.props.isClicked?
                        <Link to="/log-in">
                        <button 
                        className="nav-link" 
                        style={{color:'#764abc',backgroundColor:'transparent',border:'none'}}>
                        LOG IN
                        </button>
                        </Link>:
                        <Link to="/sign-up">
                        <button 
                        className="nav-link" 
                        style={{color:'#764abc',backgroundColor:'transparent',border:'none'}}>
                        SIGN UP
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