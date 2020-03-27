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
        this.clickNumber = 0
        this.details =""
        this.state = { 
            medicament:[{
                DCI : "",
                nomberDelot:0,
                posology:"",
                dataDapparitionDeleffetIndiserable:"",
                dateDexpositionAuMedicament:"",
                dateDarretOuModificationDuTraitement:"",
                VI:""
            }], 
            effetIndiserable:[],
            delaiDapparitionCritereChrono:0,
            evolutionDeffet:0,
            reAdministration:0,
            critereSemiologiqueCliniqueOuParaclinique:0,
            autreCauseNonMedicamenteuse:0,
            examenComplementaire:0,  
            resData : {},
            isLoading:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addMedicament = this.addMedicament.bind(this)
        this.RemoveMedicament = this.RemoveMedicament.bind(this)
        this.isFocused=this.isFocused.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({isLoading:true})
        const config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        fetch('http://localhost:5000/treate',config)
        .then(response => response.json())
        .then((response) => {
            this.setState({
               resData:[...response],
               isLoading:false
               
           })
           console.log(this.state.resData)
      }).catch((err)=>{console.error(err.message)})
    }
    RemoveMedicament(){
        this.state.medicament.pop(
            {
                DCI : "",
                nomberDelot:0,
                posology:"",
                dataDapparitionDeleffetIndiserable:"",
                dateDexpositionAuMedicament:"",
                dateDarretOuModificationDuTraitement:"",
                VI:""
            }
        )
        this.setState([...this.state.medicament]);
    }
    addMedicament(){
        
        this.state.medicament.push({
            DCI : "",
            nomberDelot:0,
            posology:"",
            dataDapparitionDeleffetIndiserable:"",
            dateDexpositionAuMedicament:"",
            dateDarretOuModificationDuTraitement:"",
            VI:""
        })
        this.setState([...this.state.medicament]);
    }
    isFocused(id){ 
        let drugInfo = document.getElementsByClassName('pharmatoolin')
        this.state.medicament.map((x,i)=>{i===id?drugInfo[i].classList.add('show'):drugInfo[i].classList.remove('show')})   
    }
    render(){
        return(
         <div className={this.props.status?"pharma raised":'hide raised'}>
            <section className="box criter-chrono">
                <h6>Critere Chronology</h6>
                <br></br>
                <select   
                value={this.state.delaiDapparitionCritereChrono} 
                placeholder="--select an option --" 
                onChange={(event)=>{
                    this.setState({
                        delaiDapparitionCritereChrono:event.target.value
                    })
                }}
                >
                    <option value={1}>one</option>
                    <option value={2}>two</option>
                    <option value={3}>tri</option>
                </select>
                <br></br>
                <select value={this.state.evolutionDeffet}
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
                value={this.state.reAdministration}
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
                value={this.state.critereSemiologiqueCliniqueOuParaclinique}
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
                value={this.state.autreCauseNonMedicamenteuse}
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
                value={this.state.examenComplementaire}
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
                <div className={!this.state.isLoading?'hide':'show wait-layer'}></div>
                <div className={!this.state.isLoading?'hide':'show wait-box'}>
                    
                    ... Please Wait
                </div>
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
            />
            <br></br>
            </div>
            ))}
                <br></br>
                <FaPlus 
                className="med-add-button"
                onClick={this.addMedicament}
                />
            </section>
            <section className="data-details">
                 {this.details}
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
                    
                    onChange={(select)=>{
                       this.setState({
                           effetIndiserable:[...this.state.effetIndiserable, select]
                       })
                    }}
                    />
                    <button id="btn">Submit</button>
                </form>
                </section>
               </div>
        )
    }
}
export default PharmacoTool;