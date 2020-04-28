import React from 'react'
import { FaPlus, FaTimesCircle } from 'react-icons/fa'
import {Typeahead} from 'react-bootstrap-typeahead'
import Response from './Response'
import effetsData from '../data/side_effectes'
import DCIData from '../data/dci_json'

class PharmacoTool extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            "medicament":[
                {
                "DCI" : "",
                "numeroDeLot":0,
                "dateDapparitionDeLeffetIndiserable":"",
                "dateDexpositionAuMedicament":"",
                "dateDarretOuModificationDuTraitement":""
                }
            ], 
            "effetIndiserable":[],
            "delaiDapparitionCritereChrono":0,
            "evolutionDeffet":0,
            "reAdministration":0,
            "critereSemiologiqueCliniqueOuParaclinique":0,
            "autreCauseNonMedicamenteuse":0,
            "examenComplementaire":0,  
            "resData" : [],
            "isLoading":false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addMedicament = this.addMedicament.bind(this)
        this.RemoveMedicament = this.RemoveMedicament.bind(this)
        this.isFocused=this.isFocused.bind(this)
        this.showInfo = this.showInfo.bind(this)
        this.HideInfo = this.HideInfo.bind(this)
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
        fetch( 'http://127.0.0.1:5000/treate',config)
        .then(response => response.status===500?this.setState({isLoading:false,resData:'Verify Your inputs'}):response.json())
        .then((response) => {this.setState({resData:[...response],isLoading:false})
      }).catch((err)=>{console.error(err.message)})
    }
    RemoveMedicament(){
        this.state.medicament.pop(
            {
                "DCI" : "",
                "nomberDelot":0,
                "dataDapparitionDeleffetIndiserable":"",
                "dateDexpositionAuMedicament":"",
                "dateDarretOuModificationDuTraitement":""
            }
        )
        this.setState([...this.state.medicament]);
    }
    addMedicament(){
        this.state.medicament.push({
            "DCI" : "",
            "nomberDelot":0,
            "dataDapparitionDeleffetIndiserable":"",
            "dateDexpositionAuMedicament":"",
            "dateDarretOuModificationDuTraitement":""
        })
        this.setState([...this.state.medicament]);
    }
    isFocused(id){ 
        let drugInfo = document.getElementsByClassName('pharmatoolin')
        this.state.medicament.map((x,i) => {
            return i===id?drugInfo[i].classList.add('show'):drugInfo[i].classList.remove('show')
        }); 
    }
    showInfo(type){
        const dataBanner = document.querySelector('.data-details')
        dataBanner.classList.add('show')
        switch (type) {
            case 'dem':
                this.setState({details:"Date d'exposition au médicament"})
                break
            case 'daei':
                this.setState({details:"Date d'apparition de l'effet indisérable"})
                break
            case 'ddmt':
                this.setState({details:"Date d'arrêt ou modification du traitement "})
                break;
          }
    }
    HideInfo(){
      const dataBanner = document.querySelector('.data-details')
      dataBanner.classList.remove('show')
    }
    render(){
        return(
         <div className={this.props.status?"pharma raised":'hide raised'}>
            <section className="box criter-chrono">
                <h6 style={{color:'#764abc'}}>Critères Chronologiques</h6>
                <br></br>
                <select value={this.state.delaiDapparitionCritereChrono} 
                onChange={(event)=>{this.setState({delaiDapparitionCritereChrono:Number(event.target.value)})}}>
                    <option value="" disabled selected>Délai d’apparition des effets indésirables</option>
                    <option value={0}>suggestif</option>
                    <option value={1}>incompatible</option>
                    <option value={2}>compatible</option>
                </select>
                <br></br>
                <select value={this.state.evolutionDeffet}
                onChange={(event)=>{this.setState({evolutionDeffet:Number(event.target.value)})}}>
                    <option value="" disabled selected>L’évolution de l’effet indésirable</option>
                    <option value={0}>suggestive</option>
                    <option value={1}>non concluante</option>
                    <option value={2}>non suggestive</option>
                </select>
                <br></br>
                <select value={this.state.reAdministration}
                onChange={(event)=>{this.setState({reAdministration:Number(event.target.value)})}}>
                    <option value="" disabled selected>Ré administration</option>
                    <option value={0}>présente</option>
                    <option value={1}>absente</option>
                    <option value={2}>non concluante</option>
                </select>
                <br></br>
                <h6 style={{color:'#764abc'}}>Critères Semiologiques</h6>
                <br></br>
                <select value={this.state.critereSemiologiqueCliniqueOuParaclinique}
                onChange={(event)=>{this.setState({critereSemiologiqueCliniqueOuParaclinique:Number(event.target.value)})}}>
                    <option value="" disabled selected>Critere semiologique clinique ou paraclinique</option>
                    <option value={0}>Rôle évocatif sémiologique d’un médicament.</option>
                    <option value={1}>Facteurs de prédisposition à une paire Effet indésirable-Médicament.</option>
                </select>
                <br></br>
                <select value={this.state.autreCauseNonMedicamenteuse}
                onChange={(event)=>{this.setState({autreCauseNonMedicamenteuse:Number(event.target.value)})}}>
                    <option value="" disabled selected>Autre cause non médicamenteuse</option>
                    <option value={0}>Cause non médicamenteuse absente après étude appropriée</option>
                    <option value={1}>cause non médicamenteuse présente</option>
                    <option value={2}>cause non médicamenteuse non étudiée</option>
                </select>
                <br></br>
                <select value={this.state.examenComplementaire}
                onChange={(event)=>{this.setState({examenComplementaire:Number(event.target.value)})}}>
                    <option value="" disabled selected>Examens complémentaires</option>
                    <option value={0}>présents</option>
                    <option value={1}>absents</option>
                    <option value={2}>non concluants / non disponibles</option>
                </select>
            </section>
            <div className={!this.state.isLoading?'hide':'show wait-layer'}></div>
            <div className={!this.state.isLoading?'hide':'show wait-box'}> ... veuillez patienter </div>
            <section className="box meds-name">
            <h6 style={{'paddingTop':20,color:'#764abc'}}>Médicaments</h6>
            {this.state.medicament.map((drug,i) => (
            <div style={{'padding':'0 40px'}}>
            <FaTimesCircle 
            className="remove-icone"
            style={{fontSize:16,color:"rgb(243, 14, 14)",marginRight:15}}
            onClick={this.RemoveMedicament}
            />
            <Typeahead
            options={DCIData}
            placeholder="   Nom DCI"
            required={true}
            maxResults={5}
            minLength={1}
            onFocus={() => this.isFocused(i)}
            className="pharmaInput"
            key={()=>i}
            id="dci-data"
            value={drug.DCI}
            onChange={select => 
            {   
              this.state.medicament[i].DCI = select.toString()
              this.setState({drug:this.state.medicament[i].DCI });
            }}
            /><br></br>
            </div>))}
            <br></br>
            <FaPlus className="med-add-button" onClick={this.addMedicament}/>
            </section>
                <section className="box side-effects">
                <form onSubmit={this.handleSubmit} action="localhost:5000/treate" method="POST">
                    <h6 style={{'paddingTop':20,marginBottom:'15px',color:'#764abc'}}>Effets Indésirables</h6>
                    <Typeahead 
                    required={true}
                    placeholder="les effets indésirable"
                    id="basic-typeahead-example"
                    multiple={true}
                    labelKey="name"
                    maxResults={3}
                    options={effetsData}
                    minLength={1}
                    onChange={(select)=>{this.setState({effetIndiserable:[
                        ...select
                    ]})}}
                    />
                    <button id="btn">Traiter</button>
                </form>
                </section>
                <section className="data-details">{this.state.details}</section>
                <section className="meds-info">
                {this.state.medicament.map((elem,i)=>(
                <form className="pharmatoolin" method="POST">
                <h6 style={{paddingTop:'30px'}}>{this.state.medicament[i].DCI}</h6>
                <input 
                type='number'
                placeholder='   N°lot'
                className="pharmaInput"
                value={elem.nomberDelot}
                onChange={event => {
                    this.state.medicament[i].numeroDeLot = event.target.value;
                    this.setState([...this.state.medicament[i].numeroDeLot]);
                }}
                />
                <br></br>
                <input 
                type='date'
                placeholder='DAEI'
                value={elem.dateDapparitionDeLeffetIndiserable}
                onFocus={(e) =>this.showInfo('daei',e)}
                onChange={event => {
                    this.state.medicament[i].dateDapparitionDeLeffetIndiserable = event.target.value;
                    this.setState([...this.state.medicament[i].dateDapparitionDeLeffetIndiserable]);
                }}
                onBlur={(e) =>this.HideInfo()}
                /><br></br>
                <input 
                type='date'
                value={elem.dateDexpositionAuMedicament}
                placeholder='DEM'
                onChange={event => {
                    this.state.medicament[i].dateDexpositionAuMedicament = event.target.value;
                    this.setState([...this.state.medicament[i].dateDexpositionAuMedicament]);
                }}
                onFocus={(e) =>this.showInfo('dem',e)}
                onBlur={(e) =>this.HideInfo()}
                /><br></br>
                <input 
                value={elem.dateDarretOuModificationDuTraitement}
                name='ddmt'
                type='date'
                onChange={event => {
                    this.state.medicament[i].dateDarretOuModificationDuTraitement = event.target.value;
                    this.setState([...this.state.medicament[i].dateDarretOuModificationDuTraitement]);
                }}
                placeholder='DDMT'
                onFocus={(e) =>this.showInfo('ddmt',e)}
                onBlur={(e) =>this.HideInfo()}
                /><br></br>
            </form>
            ))}
            </section>
                <Response resData={this.state.resData} />
            </div>
        )
    }
}
export default PharmacoTool;