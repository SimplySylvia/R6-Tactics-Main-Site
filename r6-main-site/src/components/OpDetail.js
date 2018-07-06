import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AtkopIdModel from '../models/AtkopId';
import axios from 'axios';

class OpDetail extends Component {
  constructor(){
    super()
    this.state = {
      atkop: [],
      opid: '',
    }
  }
  

  componentDidMount(){
    
    this.fetchData()
    
  }

  // updateId(opid){
  //   this.setState({
  //     opid: opid,
  //   })
  //   console.log('this is the state id',this.state.opid)
  // }

  fetchData(){
    const id  = this.props.match.params.opid;
    console.log(id)
    AtkopIdModel.find(id).then( (res) => {
      console.log('Here is the res:',res)
      this.setState ({
        atkop: res.data,
      })
    })
  }



  render(){
    console.log('here is the state of the op',this.state.atkop)
    return(

  <div className="opDetail" >
  <h1>HERE IS THE OP ID</h1>
  <h2>{this.state.atkop.name}</h2>
  </div>
  
    )
  }
}

export default OpDetail