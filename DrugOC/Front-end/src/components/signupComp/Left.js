import React , { Component} from 'react'

class Left extends Component{
    render(){
        return(
            <div className="flex-left">
                <img className="image" src="../../circle202.png" alt="welcome"/>
                <div className="left-infos">
               <h4 style={{fontSize:32,fontWeight: 'bold',color:"#000"}}>DRUG <br></br>OVERSIGHT  AND <br></br>CONTROL</h4>
               <p style={{color:"#764abc"}}>Car notre santé n’attends pas</p> 
               </div>
            </div>
        )
    }
}
export default Left;