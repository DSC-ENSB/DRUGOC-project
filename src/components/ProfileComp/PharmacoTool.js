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
        this.didDciMatch(this.state.drugs)
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(JSON.stringify(this.state.drugs))
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
        console.log(this.state)
    }
    isFocused(bi){
        console.log(bi)
    }
    didDciMatch(mdrugs){
        //console.log(this.state.drugs)
    }
    showInfo(type){
        let info;
        const dataBanner = document.querySelector('.data-details')
        setInterval(() => {
            dataBanner.classList.toggle('show')
        }, 10);
        switch (type) {
            case 'dem':
                info = "délié D'apparition "
                this.setState({details:info})
                break
            case 'daei':
                info = "délié D'apparition l'effet indésirable"
                this.setState({details:info})
                break
            case 'ddmt':
                info = "délié "
                this.setState({details:info})
                break;
          }
        
        //Show information about that input 
        //hide the information 
    }
    render(){
        return(
         <div className={this.props.status?"pharma raised":'hide raised'}>
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
            <h4 style={{'paddingTop':20}}>Effects Indesirables</h4>
                <textarea 
                name="effects"
                type="text"
                required={true}
                placeholder="   Side Effect"
                className="pharmaInput"
                />
                <button id="btn" onSubmit={this.handleSubmit}>Submit</button>
            </section>
            <section className="meds-info">
                {this.state.medicament.map((drug,i)=>(
                <form className="pharmatoolin" method="POST">
                    <h5 style={{paddingTop:'40px'}}>Informations</h5>
                    <input 
                    type='text'
                    placeholder='   Posology'
                    className="pharmaInput"
                    required={true}
                    />
                    <br></br>
                    <input 
                    type='text'
                    placeholder='   Voie'
                    className="pharmaInput"
                    required={true}
                    />
                    <br></br>
                    <input 
                    type='number'
                    placeholder='   N°lot'
                    className="pharmaInput"
                    />
                    <br></br>
                    <input 
                    type='date'
                    placeholder='DAEI'
                    onFocus={(e) =>this.showInfo('daei',e)}
                    /><br></br>
                    <input 
                    type='date'
                    placeholder='DEM'
                    onFocus={(e) =>this.showInfo('dem',e)}
                    /><br></br>
                    <input 
                    value={this.state.medicament.dateDarretOuModificationDuTraitement}
                    name='ddmt'
                    type='date'
                    onChange={this.handlchange}
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






























