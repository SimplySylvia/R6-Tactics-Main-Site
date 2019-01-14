import React, {Component} from 'react';
import AtkOpDetail from '../components/AtkOpDetail'
import {BASEPATH} from '../config/constants'

class OpDetailContainer extends Component {
  state = {
    atkop: [],
  }
  componentDidMount = async() => {
    const id  = this.props.location.state.opid;
    await fetch(`${BASEPATH}/api/atkops/${id}`)
    .then(response => response.json())
    .then(info => {
      this.setState({atkop : [info.data]} )
    })
  }
  render(){
    let atkop = this.state.atkop.map( (atkop, i) => {
      return (
        <AtkOpDetail
          atkop={atkop}
          key={i} />
      )
    })
    return(
      <div className="opDetail" >
      {atkop}
      </div>
    )
  }
}

export default OpDetailContainer