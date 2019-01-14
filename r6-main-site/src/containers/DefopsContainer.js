import React, {Component} from 'react'
import DefopModel from '../models/Defop'
import Defops from '../components/Defops'

class OpsContainer extends Component{
      state = {
          defops: [],
        }
      componentDidMount(){
        this.fetchData()
      }
      fetchData = () => {
        DefopModel.all().then( (res) => {
          this.setState ({
            defops: res.data.data,
            defop: ''
          })
        })
      }
    render(){
      return (
        <div className='opscontainer'>
        <div className="DefopsList">
        <Defops defops={this.state.defops}/>
        </div>
        </div>
      )
    }
  }
  
  export default OpsContainer