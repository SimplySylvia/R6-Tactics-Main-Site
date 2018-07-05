import React, {Component} from 'react'
import DefopModel from '../models/Defop'
import Defops from '../components/Defops'

class OpsContainer extends Component{
    constructor(){
        super()
        this.state = {
          defops: [],
        }
      }

      componentDidMount(){
        this.fetchData()
      }
    
      fetchData(){
        DefopModel.all().then( (res) => {
          console.log('Here is the res:',res)
          this.setState ({
            defops: res.data,
            defop: ''
          })
        })
      }
      
    render(){
      return (
        <div className='opscontainer'>
        {console.log('logged atk:',this.state.defops)}
        <div className="DefopsList">
        <Defops defops={this.state.defops}/>
        </div>

        </div>
      )
    }
  }
  
  export default OpsContainer