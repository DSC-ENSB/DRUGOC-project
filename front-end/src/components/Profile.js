import React from 'react'
import SideBar from './ProfileComp/SideBar'
import Introduction from './ProfileComp/Introduction'
import PharmacoTool from './ProfileComp/PharmacoTool'


class Profile extends React.Component {
    constructor(){
        super();
        this.state = {
            headerShowen : false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        const head = document.getElementsByTagName('header')[0]
        const body = document.getElementsByTagName('body')[0]
        head.classList.add('hide')
        body.style.backgroundImage = "none"
    }
    handleClick(){
        this.setState(prevState=> ({
            headerShowen : !prevState.headerShowen
        })
    )}
    render(){
        return (
            <div className="Profile">
                <SideBar/>
                <Introduction handleClick={this.handleClick} status={this.state.headerShowen}/>
                <PharmacoTool status={this.state.headerShowen}/>
            </div>
        )
    }
}
export default Profile;