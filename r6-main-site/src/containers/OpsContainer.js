import React, {Component} from 'react'
import AtkopModel from '../models/Atkop'
import Atkops from '../components/Atkops'

class OpsContainer extends Component{
    constructor(){
        super()
        this.state = {
          atkops: [],
          editingAtkopId: null,
          editing: false
        }
      }

      componentDidMount(){
        this.fetchData()
      }
    
      fetchData(){
        AtkopModel.all().then( (res) => {
          console.log('Here is the res:',res)
          this.setState ({
            atkops: res.data,
            atkop: ''
          })
        })
      }
      
    render(){
      return (
        <div className='opscontainer'>
        {console.log('logged atk:',this.state.atkops)}
        <Atkops atkops={this.state.atkops}/>
        

        </div>
      )
    }
  }
  
  export default OpsContainer