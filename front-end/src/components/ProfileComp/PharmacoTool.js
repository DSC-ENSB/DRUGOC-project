import React from 'react'
import { FaPlus, FaTimesCircle, FaSpinner } from 'react-icons/fa'
import data from './dataa.json' 
import MedInfo from './pharmSubComp/MedInfo'
import {Typeahead} from 'react-bootstrap-typeahead'
import effetsData from '../data/side_effects'
import DCIData from '../data/dci_json'

class PharmacoTool extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            medicament:[{
                DCI : "",
                numeroDeLot:0,
                dateDapparitionDeLeffetIndiserable:"",
                dateDexpositionAuMedicament:"",
                dateDarretOuModificationDuTraitement:""
            }], 
            effetIndiserable:[],
            delaiDapparitionCritereChrono:0,
            evolutionDeffet:0,
            reAdministration:0,
            critereSemiologiqueCliniqueOuParaclinique:0,
            autreCauseNonMedicamenteuse:0,
            examenComplementaire:0,  
            resData : [],
            isLoading:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addMedicament = this.addMedicament.bind(this)
        this.RemoveMedicament = this.RemoveMedicament.bind(this)
        this.isFocused=this.isFocused.bind(this)
        this.removeResulte=this.removeResulte.bind(this)
    }
    removeResulte(){
        const resLayer =document.getElementsByClassName('response')[0]
        resLayer.classList.add('hide')
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({isLoading:true})
        const config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(this.state)
        }
        fetch('http://localhost:5000/treate',config)
        .then(response => {
            if(response.status==500){
                this.setState({
                    isLoading:false,
                    resData:'Verify Your inputs'
                })
            }
            else if(response.status==404){
                this.setState({
                    isLoading:false,
                    resData:'Page Not Found'
                })
            }
            else{response.json()}
        })
        .then((response) => {
                this.setState({
                    resData:[...response],
                    isLoading:false
                })
      }).catch((err)=>{console.error(err.message)})
    }
    RemoveMedicament(){
        this.state.medicament.pop(
            {
                DCI : "",
                nomberDelot:0,
                dataDapparitionDeleffetIndiserable:"",
                dateDexpositionAuMedicament:"",
                dateDarretOuModificationDuTraitement:""
            }
        )
        this.setState([...this.state.medicament]);
    }
    addMedicament(){
        
        this.state.medicament.push({
            DCI : "",
            nomberDelot:0,
            dataDapparitionDeleffetIndiserable:"",
            dateDexpositionAuMedicament:"",
            dateDarretOuModificationDuTraitement:""
        })
        this.setState([...this.state.medicament]);
    }
    isFocused(id){ 
        console.log(this.state)
        let drugInfo = document.getElementsByClassName('pharmatoolin')
        this.state.medicament.map((x,i)=>{i===id?drugInfo[i].classList.add('show'):drugInfo[i].classList.remove('show')})   
    }
    render(){
        return(
         <div className={this.props.status?"pharma raised":'hide raised'}>
            <section className="box criter-chrono">
                <h6>Critere Chronology</h6>
                <br></br>
                <select value={this.state.delaiDapparitionCritereChrono} 
                placeholder="--select an option --" 
                onChange={(event)=>{this.setState({delaiDapparitionCritereChrono:event.target.value})}}>
                    <option value={0}>one</option>
                    <option value={1}>two</option>
                    <option value={2}>tri</option>
                </select>
                <br></br>
                <select value={this.state.evolutionDeffet}
                onChange={(event)=>{this.setState({evolutionDeffet:event.target.value})}}>
                    <option value={0}>Tri</option>
                    <option value={1}>two</option>
                    <option value={2}>one</option>
                </select>
                <br></br>
                <select value={this.state.reAdministration}
                onChange={(event)=>{this.setState({reAdministration:event.target.value})}}>
                    <option value={0}>One</option>
                    <option value={1}>two</option>
                    <option value={2}>tri</option>
                </select>
                <br></br>
                <select value={this.state.critereSemiologiqueCliniqueOuParaclinique}
                onChange={(event)=>{this.setState({critereSemiologiqueCliniqueOuParaclinique:event.target.value})}}>
                    <option value={0}>Tri</option>
                    <option value={1}>two</option>
                    <option value={2}>one</option>
                </select>
                <br></br>
                <select value={this.state.autreCauseNonMedicamenteuse}
                onChange={(event)=>{this.setState({autreCauseNonMedicamenteuse:event.target.value})}}>
                    <option value={0}>One</option>
                    <option value={1}>two</option>
                    <option value={2}>tri</option>
                </select>
                <br></br>
                <select value={this.state.examenComplementaire}
                onChange={(event)=>{this.setState({examenComplementaire:event.target.value})}}>
                    <option value={0}>Tri</option>
                    <option value={1}>two</option>
                    <option value={2}>one</option>
                </select>
            </section>
            <div className={!this.state.isLoading?'hide':'show wait-layer'}></div>
            <div className={!this.state.isLoading?'hide':'show wait-box'}> ... Please Wait it May take a Minuts</div>
            <section className="box meds-name">
            <h4 style={{'paddingTop':20}}>Medicaments</h4>
            {this.state.medicament.map((drug,index) => (
            <div style={{'padding':'0 40px'}}>
            <FaTimesCircle 
            className="remove-icone"
            style={{fontSize:16,color:"rgb(243, 14, 14)",marginRight:15}}
            onClick={this.RemoveMedicament}
            />
            <Typeahead
            options={DCIData}
            placeholder="   DCI Name"
            required={true}
            maxResults={3}
            minLength={1}
            onFocus={() => this.isFocused(index)}
            className="pharmaInput"
            key={index}
            id="dci-data"
            value={drug.DCI}
            onChange={select => {
              this.state.medicament[index].DCI = select;
              this.setState([...this.state.medicament]);
            }}
            /><br></br>
            </div>))}
            <br></br>
            <FaPlus className="med-add-button" onClick={this.addMedicament}/>
            </section>
            <MedInfo meds={this.state.medicament}/>
                <section className="box side-effects">
                <form onSubmit={this.handleSubmit} action="localhost:5000/treate" method="POST">
                    <h4 style={{'paddingTop':20}}>Effets Indesirables</h4>
                    <Typeahead 
                    required={true}
                    placeholder="les effets indésirable"
                    id="basic-typeahead-example"
                    multiple={true}
                    labelKey="name"
                    maxResults={3}
                    options={effetsData}
                    minLength={1}
                    onChange={(select)=>{this.setState({effetIndiserable:[...this.state.effetIndiserable, select]})}}
                    />
                    <button id="btn">Submit</button>
                </form>
                </section>
                <section className={this.state.resData.length==0?"response hide":"response"}>
                    <FaTimesCircle onClick={this.removeResulte} style={{float:'right'}}/>
                    <h4 style={{textAlign:"center"}}>Resulte</h4>
                    {typeof(this.state.resData)=="string"?<div style={{color:'red'}}>Somthing Went wrong</div>:
                    this.state.resData.map((elem,i)=>(
                        <div>
                            <h5 style={{color:"#1fb5cf"}}>Interaction {i+1}</h5>
                            <hr></hr>
                            <div>{elem.criteresChronologiques}</div>
                            <br></br>
                            <div>{elem.criteresSemiologiques}</div>
                            <br></br>
                            <div>{elem.delaiA}</div>
                            <br></br>
                            <div>{elem.delaiB}</div>
                            <br></br>
                            <div>{elem.interaction}</div>
                            <br></br>
                            <div> Score de l'imputabilite extrinseque : {elem.scoreDeLimputabiliteExtrinseque}</div>
                            <br></br>
                            <div>Score de l'imputabilite intrinseque : {elem.scoreDeLimputabiliteIntrinseque}</div>
                            <br></br>
                            <div>Score Informativite : {elem.scoreInformativite}</div>
                        </div>
                    ))
                    }
                </section>
            </div>
        )
    }
}
export default PharmacoTool;