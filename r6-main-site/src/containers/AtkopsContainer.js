import React, {Component} from 'react'
import AtkopModel from '../models/Atkop'
import Atkops from '../components/Atkops'

class OpsContainer extends Component{
    constructor(){
        super()
        this.state = {
          atkops: [],
        }
      }

      componentDidMount(){
        this.fetchData()
      }
    
      fetchData(){
        AtkopModel.all().then( (res) => {
          this.setState ({
            atkops: res.data.data,
            atkop: ''
          })
        })
      }
      
    render(){
      return (
        <div className='opscontainer'>
        <div className="AtkopsList">
        <Atkops atkops={this.state.atkops}/>
        </div>

        </div>
      )
    }
  }
  
  export default OpsContainer