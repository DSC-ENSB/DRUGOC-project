import React ,{Component}from 'react'


export default class MedInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
          details:''
        }
        this.showInfo = this.showInfo.bind(this)
        this.HideInfo = this.HideInfo.bind(this)
    }
    showInfo(type){
        const dataBanner = document.querySelector('.data-details')
        dataBanner.classList.add('show')
        switch (type) {
            case 'dem':
                this.setState({details:"date D'exposition Au Medicament"})
                break
            case 'daei':
                this.setState({details:"data D'apparition De l'effet Indisérable"})
                break
            case 'ddmt':
                this.setState({details:"date D'arret Ou Modification Du Traitement "})
                break;
          }
    }
    HideInfo(){
      const dataBanner = document.querySelector('.data-details')
      dataBanner.classList.remove('show')
    }
    render(){
    return(
        <section className="meds-info">
        {this.props.meds.map((elem,i)=>(
        <form className="pharmatoolin" method="POST">
        <h6 style={{paddingTop:'30px'}}>{this.props.meds[i].DCI}</h6>
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
        value={elem.dateDapparitionDeLeffetIndiserable}
        onFocus={(e) =>this.showInfo('daei',e)}
        onChange={event => {
            this.props.meds[i].dateDapparitionDeLeffetIndiserable = event.target.value;
            this.setState([...this.props.meds[i].dateDapparitionDeLeffetIndiserable]);
          }}
        onBlur={(e) =>this.HideInfo()}
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
        onBlur={(e) =>this.HideInfo()}
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
        onBlur={(e) =>this.HideInfo()}
        /><br></br>
    </form>
    ))}
    </section>

        )
    }
}
