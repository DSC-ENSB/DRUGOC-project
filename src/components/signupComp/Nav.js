import React , { Component} from 'react'


class Nav extends Component{
    render(){
        return(
            <header className="header navbar-fixed-top">
                <div className="header-navbar">
                    <div className="header-container">
                        <div className="header-row">
                            <div className="half">CNPM</div>
                            <div className="half">LOG IN</div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Nav;