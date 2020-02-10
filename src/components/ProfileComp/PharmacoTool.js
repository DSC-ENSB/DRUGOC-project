import React from 'react'

class PharmacoTool extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ddmt:''
        }
        this.handlchange = this.handlchange.bind(this)
    }
    handlchange(event){
        const {name ,value } = event.target
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <div className={this.props.status?"pharma raised":'hide raised'}>
                <form>
                    <input 
                    type='text'
                    placeholder='DCI'
                    />
                    <input 
                    type='number'
                    placeholder='N°lot'
                    />
                    <input 
                    type='text'
                    placeholder='Posology'
                    />
                    <input 
                    type='date'
                    placeholder='DAEI'
                    />
                    <input 
                    type='date'
                    placeholder='DEM'
                    />
                    <input 
                    value={this.state.ddmt}
                    name='ddmt'
                    type='date'
                    onChange={this.handlchange}
                    placeholder='DDMT'
                    />
                    <input 
                    type='text'
                    placeholder='Voie '
                    />
                <h3>{this.state.ddmt}</h3> 
           </form>
            </div>
        )
    }
}
export default PharmacoTool;