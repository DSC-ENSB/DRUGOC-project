import React from 'react'
import { FaPlus,FaMinusCircle } from 'react-icons/fa'
import data from './dataa.json' 
import MedInfo from './pharmSubComp/MedInfo'
import Criterchrono from './pharmSubComp/Criterchrono.js';


class PharmacoTool extends React.Component{
    constructor(props){
        super(props);
        this.clickNumber = 0
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
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChanges =this.handleChanges.bind(this)
        this.didDciMatch = this.didDciMatch.bind(this)
        this.addMedicament = this.addMedicament.bind(this)
        this.RemoveMedicament = this.RemoveMedicament.bind(this)
        this.isFocused=this.isFocused.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const config = {
        headers: {
            'Content-type': 'application/json',
          },
          method: 'POST',
          body: data
        }
        fetch('http://localhost:5000/treate',config).catch((err)=>{console.error(err)})
        .then(response => {
            return response.json()
      })
    }
    
    handleChanges(event){
        this.state.effetIndiserable = event.target.value;
        this.state.effetIndiserable.concat('')
        this.setState([...this.state.effetIndiserable]);
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
        console.log(this.state)
        let drugInfo = document.getElementsByClassName('pharmatoolin')
        this.state.medicament.map((x,i)=>{i===id?drugInfo[i].classList.add('show'):drugInfo[i].classList.remove('show')})   
    }
    didDciMatch(para){
        //console.log(para)
    }
    
    render(){
        return(
         <div className={this.props.status?"pharma raised":'hide raised'}>
            <Criterchrono 
            dacc={this.state.delaiDapparitionCritereChrono}
            handleChanges={this.handleChanges}
            evEff={this.state.evolutionDeffet}
            reAd={this.state.reAdministration}
            cscp={this.state.critereSemiologiqueCliniqueOuParaclinique}
            acnm={this.state.autreCauseNonMedicamenteuse}
            examCom={this.state.examenComplementaire}
            />
            <section className="box meds-name">
                <h4 style={{'paddingTop':20}}>Medicaments</h4>
            {this.state.medicament.map((drug,index) => (
            <div>
            
            <FaMinusCircle 
            style={{fontSize:16,color:"rgb(243, 14, 14)",marginRight:15}}
            onClick={this.RemoveMedicament}
            />
            <input
            placeholder="   DCI Name"
            required={true}
            onFocus={() => this.isFocused(index)}
            className="pharmaInput"
            key={index}
            value={drug.DCI}
            onChange={event => {
              this.state.medicament[index].DCI = event.target.value;
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
                 {this.state.details}
            </section>
            <MedInfo meds={this.state.medicament}/>
                <section className="box side-effects">
                <form onSubmit={this.handleSubmit} >
                    <h4 style={{'paddingTop':20}}>Effets Indesirables</h4>
                    <textarea 
                    name="effects"
                    required={true}
                    placeholder="   Side Effect"
                    className="pharmaInput"
                    onChange={this.handleChanges}
                    value={this.state.effetIndiserable}
                    />
                    <button id="btn">Submit</button>
                </form>
                </section>
               </div>
        )
    }
}
export default PharmacoTool;