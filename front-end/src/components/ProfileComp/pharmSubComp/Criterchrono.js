import React, { Component } from "react"

export default class Criterchrono extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className="box criter-chrono">
                <h6>Critere Chronology</h6>
                <br></br>
                <select   
                value={this.props.dacc} 
                placeholder="--select an option --" 
                onChange={this.props.handleChanges}
                >
                    <option value={1}>one</option>
                    <option value={2}>two</option>
                    <option value={3}>tri</option>
                </select>
                <br></br>
                <select value={this.props.evEff}
                onChange={(event)=>{
                    this.setState({
                        evolutionDeffet:event.target.value
                    })
                }}>
                    <option value={1}>Tri</option>
                    <option value={2}>two</option>
                    <option value={3}>one</option>
                </select>
                <br></br>
                <select 
                value={this.props.reAd}
                onChange={(event)=>{
                    this.setState({
                        reAdministration:event.target.value
                    })
                }}
                >
                    <option value={1}>One</option>
                    <option value={2}>two</option>
                    <option value={3}>tri</option>
                </select>
                <br></br>
                <select
                value={this.props.cscp}
                onChange={(event)=>{
                    this.setState({
                        critereSemiologiqueCliniqueOuParaclinique:event.target.value
                    })
                }}>
                    <option value={1}>Tri</option>
                    <option value={2}>two</option>
                    <option value={3}>one</option>
                </select>
                <br></br>
                <select 
                value={this.props.acnm}
                onChange={(event)=>{
                    this.setState({
                        autreCauseNonMedicamenteuse:event.target.value
                    })
                }}
                >
                    <option value={1}>One</option>
                    <option value={2}>two</option>
                    <option value={3}>tri</option>
                </select>
                <br></br>
                <select 
                value={this.props.examCom}
                onChange={(event)=>{
                    this.setState({
                        examenComplementaire:event.target.value
                    })
                }}
                >
                    <option value={1}>Tri</option>
                    <option value={2}>two</option>
                    <option value={3}>one</option>
                </select>
            </section>

        )
    }
} 
