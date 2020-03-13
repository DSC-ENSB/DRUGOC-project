import React from 'react'
import { FaPlus } from 'react-icons/fa'

class PharmacoTool extends React.Component{
    constructor(props){
        super(props);
        this.clickNumber = 0
        this.state = {
            drugs:[{name:" ex : Paracétamole"}],
            Posology:[{dosage:""}],
            Voie:[{via:""}],
            lot:[{number:""}],
            deai:[{date:""}],
            dem:[{date:""}],
            ddmt:[{date:""}],
            effectsInd:[{effects:""}]
        }
        this.handlchange = this.handlchange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.didDciMatch = this.didDciMatch.bind(this)
        this.addDrug = this.addDrug.bind(this)
        this.showInfo = this.showInfo.bind(this)
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
        this.state.drugs.pus({ name: "" });
        this.setState([...this.state.drugs]);
    }
    didDciMatch(mdrugs){
        //console.log(this.state.drugs)
    }
    showInfo(){
        const DAEI = document.getElementsByTagName('input[type==date]')[0]
        console.log(DAEI);
    }
    render(){
        return(
        <div className={this.props.status?"pharma raised":'hide raised'}>
            <section className="meds-name">
                <h4 style={{'paddingTop':20}}>Medicaments</h4>
            {this.state.drugs.map((drug,index) => (
            <div>
            <input
            placeholder="   Name of the Drug"
            required={true}
            className="pharmaInput"
            key={index}
            value={drug.name}
            onChange={event => {
              this.state.drugs[index].name = event.target.value;
              this.setState([...this.state.drugs]);
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
                Informations
            </section>
            <section className="side-effects">
            <h4 style={{'paddingTop':20}}>Effects Indesirables</h4>
                <textarea 
                name="effects"
                type="text"
                required={true}
                placeholder="   Side Effect"
                className="pharmaInput"
                />
            </section>
            <section className="meds-info">
                {this.state.drugs.map((drug,i)=>(
                <form id="pharmatoolin" onSubmit={this.handleSubmit} method="POST">
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
                    /><br></br>
                    <input 
                    type='date'
                    placeholder='DEM'
                    /><br></br>
                    <input 
                    value={this.state.ddmt}
                    name='ddmt'
                    type='date'
                    onChange={this.handlchange}
                    placeholder='DDMT'
                    /><br></br>
                    <button id="btn">Submit</button>
           </form>
                ))}
        </section>
        </div>
        )
    }
}
export default PharmacoTool;