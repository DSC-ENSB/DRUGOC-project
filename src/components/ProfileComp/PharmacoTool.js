import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { setInterval } from 'timers';

class PharmacoTool extends React.Component{
    constructor(props){
        super(props);
        this.clickNumber = 0
        this.state = { 
            details : '',
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
        this.handlchange = this.handlchange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.didDciMatch = this.didDciMatch.bind(this)
        this.addDrug = this.addDrug.bind(this)
        this.showInfo = this.showInfo.bind(this)
        this.isFocused=this.isFocused.bind(this)
    }
    handlchange(event){
        const {name ,value } = event.target
        this.setState({
            [name]:value
        })
        this.didDciMatch(this.state)
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(JSON.stringify(this.state))
    }
    addDrug(){
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
        this.state.medicament.map((x,i)=>{
            i===id?drugInfo[i].classList.add('show'):drugInfo[i].classList.remove('show')
            }
        )   
    }
    didDciMatch(para){
        console.log(para)
    }
    showInfo(type){
        let info;
        const dataBanner = document.querySelector('.data-details')
        setTimeout(() => {
            dataBanner.classList.add('show')
        }, 1);
        switch (type) {
            case 'dem':
                info = "date D'exposition Au Medicament"
                this.setState({details:info})
                break
            case 'daei':
                info = "data D'apparition De leffetIndiserable"
                this.setState({details:info})
                break
            case 'ddmt':
                info = "date Darret Ou Modification Du Traitement "
                this.setState({details:info})
                break;
          }
    }
    render(){
        return(
         <div className={this.props.status?"pharma raised":'hide raised'}>
            <section className="box criter-chrono">
                <h6>Critere Chronology</h6>
                <br></br>
                <select value={this.state.delaiDapparitionCritereChrono}>
                    <option value={1}>One</option>
                    <option value={2}>two</option>
                    <option value={3}>tri</option>
                </select>
                <br></br>
                <select value={this.state.evolutionDeffet}>
                    <option value={1}>Tri</option>
                    <option value={2}>two</option>
                    <option value={3}>one</option>
                </select>
                <br></br>
                <select value={this.state.reAdministration}>
                    <option value={1}>One</option>
                    <option value={2}>two</option>
                    <option value={3}>tri</option>
                </select>
                <br></br>
                <select value={this.state.reAdministration}>
                    <option value={1}>Tri</option>
                    <option value={2}>two</option>
                    <option value={3}>one</option>
                </select>
                <br></br>
                <select value={this.state.reAdministration}>
                    <option value={1}>One</option>
                    <option value={2}>two</option>
                    <option value={3}>tri</option>
                </select>
                <br></br>
                <select value={this.state.reAdministration}>
                    <option value={1}>Tri</option>
                    <option value={2}>two</option>
                    <option value={3}>one</option>
                </select>
            </section>
            <section className="box meds-name">
                <h4 style={{'paddingTop':20}}>Medicaments</h4>
            {this.state.medicament.map((drug,index) => (
            <div>
            <input
            placeholder="   Name of the Drug"
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
                onClick={this.addDrug}
                />
            </section>
            <section className="data-details">
                 {this.state.details}
            </section>
            <section className="box side-effects">
            <form>
            <h4 style={{'paddingTop':20}}>Effets Indesirables</h4>
                <textarea 
                name="effects"
                type="text"
                required={true}
                placeholder="   Side Effect"
                className="pharmaInput"
                onChange={event => {
                    this.state.effetIndiserable = event.target.value;
                    this.setState([...this.state.effetIndiserable]);
                  }}
                value={this.state.effetIndiserable}
                />
                <button id="btn" onSubmit={this.handleSubmit}>Submit</button>
            </form>
            </section>
            <section className="meds-info">
                {this.state.medicament.map((elem,i)=>(
                <form className="pharmatoolin" method="POST">
                    <h6 style={{paddingTop:'30px'}}>{this.state.medicament[i].DCI}</h6>
                    <input 
                    type='text'
                    placeholder='   Posology'
                    className="pharmaInput"
                    required={true}
                    value={elem.posology}
                    onChange={event => {
                        this.state.medicament[i].posology = event.target.value;
                        this.setState([...this.state.medicament[i].posology]);
                      }}
                    />
                    <br></br>
                    <input 
                    type='text'
                    placeholder='   Voie'
                    className="pharmaInput"
                    required={true}
                    onChange={event => {
                        this.state.medicament[i].VI = event.target.value;
                        this.setState([...this.state.medicament[i].VI]);
                      }}
                    value={elem.VI}
                    />
                    <br></br>
                    <input 
                    type='number'
                    placeholder='   N°lot'
                    className="pharmaInput"
                    value={elem.nomberDelot}
                    onChange={event => {
                        this.state.medicament[i].nomberDelot = event.target.value;
                        this.setState([...this.state.medicament[i].nomberDelot]);
                      }}
                    />
                    <br></br>
                    <input 
                    type='date'
                    placeholder='DAEI'
                    value={elem.dataDapparitionDeleffetIndiserable}
                    onFocus={(e) =>this.showInfo('daei',e)}
                    onChange={event => {
                        this.state.medicament[i].dataDapparitionDeleffetIndiserable = event.target.value;
                        this.setState([...this.state.medicament[i].dataDapparitionDeleffetIndiserable]);
                      }}
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
                    /><br></br>
            </form>
            ))}
        </section>
        </div>
        )
    }
}
export default PharmacoTool;






























