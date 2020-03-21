import React ,{Component}from 'react'


export default class MedInfo extends Component {
    constructor(props){
        super(props)
        this.showInfo = this.showInfo.bind(this)
    }
    showInfo(type){
        let info;
        const dataBanner = document.querySelector('.data-details')
        dataBanner.classList.add('show')
        switch (type) {
            case 'dem':
                info = "date D'exposition Au Medicament"
                //this.setState({details:info})
                break
            case 'daei':
                info = "data D'apparition De leffetIndiserable"
                //this.setState({details:info})
                break
            case 'ddmt':
                info = "date Darret Ou Modification Du Traitement "
                //this.setState({details:info})
                break;
          }
    }
    render(){
    return(
    <section className="meds-info">
    {this.props.meds.map((elem,i)=>(
    <form className="pharmatoolin" method="POST">
    <h6 style={{paddingTop:'30px'}}>{this.props.meds[i].DCI}</h6>
    <input 
    type='text'
    placeholder='   Posology'
    className="pharmaInput"
    required={true}
    value={elem.posology}
    onChange={event => {
        this.props.meds[i].posology = event.target.value;
        this.setState([...this.props.meds[i].posology]);
      }}
    />
    <br></br>
    <input 
    type='text'
    placeholder='   Voie'
    className="pharmaInput"
    required={true}
    onChange={event => {
        this.props.meds[i].VI = event.target.value;
        this.setState([...this.props.meds[i].VI]);
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
        this.props.meds[i].nomberDelot = event.target.value;
        this.setState([...this.props.meds[i].nomberDelot]);
      }}
    />
    <br></br>
    <input 
    type='date'
    placeholder='DAEI'
    value={elem.dataDapparitionDeleffetIndiserable}
    onFocus={(e) =>this.showInfo('daei',e)}
    onChange={event => {
        this.props.meds[i].dataDapparitionDeleffetIndiserable = event.target.value;
        this.setState([...this.props.meds[i].dataDapparitionDeleffetIndiserable]);
      }}
    /><br></br>
    <input 
    type='date'
    value={elem.dateDexpositionAuMedicament}
    placeholder='DEM'
    onChange={event => {
        this.props.meds[i].dateDexpositionAuMedicament = event.target.value;
        this.setState([...this.props.meds[i].dateDexpositionAuMedicament]);
      }}
    onFocus={(e) =>this.showInfo('dem',e)}
    /><br></br>
    <input 
    value={elem.dateDarretOuModificationDuTraitement}
    name='ddmt'
    type='date'
    onChange={event => {
        this.props.meds[i].dateDarretOuModificationDuTraitement = event.target.value;
        this.setState([...this.props.meds[i].dateDarretOuModificationDuTraitement]);
      }}
    placeholder='DDMT'
    onFocus={(e) =>this.showInfo('ddmt',e)}
    /><br></br>
</form>
))}
</section>

        )
    }
}
