import React, {Component} from 'react'
import AtkopModel from '../models/Atkop'
import Atkops from '../components/Atkops'

class OpsContainer extends Component{
    constructor(){
        super()
        this.state = {
          Atkops: [],
          editingAtkopId: null,
          editing: false
        }
      }
      
    
      componentDidMount(){
        this.fetchData()
      }
    
      fetchData(){
        AtkopModel.all().then( (res) => {
          this.setState ({
            Atkops: res.data.Atkops,
            Atkop: ''
          })
        })
      }
      
    render(){
      return (
        <div className='opscontainer'>
        <Atkops atkops={this.state.Atkops}/>
        

        </div>
      )
    }
  }
  
  export default OpsContainer