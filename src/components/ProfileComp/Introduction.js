import React from 'react'

class Introduction extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className={this.props.status?'hide':"Intro"}>
            <h3>Welcome</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button 
            id="btn" 
            style={{backgroundColor:'rgba(19, 177, 205, 0.95)',color:'white'}}
            onClick={this.props.handleClick}
            >
                Next
            </button>
            </div>
        )
    }
}
export default Introduction;