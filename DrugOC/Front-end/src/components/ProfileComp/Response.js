import React from 'react'
import {FaTimesCircle} from 'react-icons/fa'

export default class Response extends React.Component{
    constructor(props){
        super(props)
        this.removeResulte=this.removeResulte.bind(this)
    }

    removeResulte(){
        const resLayer =document.getElementsByClassName('response')[0]
        resLayer.classList.add('hide')
    }
    render(){
        return(
            <section className={this.props.resData.length===0?"response hide":"response"}>
                    <FaTimesCircle onClick={this.removeResulte} style={{float:'right'}}/>
                    <h4 style={{textAlign:"center"}}>Résultas</h4>
                    {typeof(this.props.resData)==="string"?<div style={{color:'red'}}>Somthing Went wrong</div>:
                    this.props.resData.map((elem,i)=>(
                        <div>
                            <h5 style={{color:"#1fb5cf"}}>Interaction {i+1}</h5>
                            <hr></hr>
                            <div>{elem.interaction}</div>
                            <br></br>
                            <div>{elem.delaiA}</div>
                            <br></br>
                            <div>{elem.delaiB}</div>
                            <br></br>
                            <div>{elem.scoreInformativite}</div>
                            <br></br>
                            <div>Critère Chronologique :{elem.criteresChronologiques}</div>
                            <br></br>
                            <div>Critère Semiologique : {elem.criteresSemiologiques}</div>
                            <br></br>
                            <div> Score de l'imputabilité extrinseque : {elem.scoreDeLimputabiliteExtrinseque}</div>
                            <br></br>
                            <div>Score de l'imputabilité intrinseque : {elem.scoreDeLimputabiliteIntrinseque}</div>
                            
                        </div>
                    ))
                    }
                </section>
        )
    }
}