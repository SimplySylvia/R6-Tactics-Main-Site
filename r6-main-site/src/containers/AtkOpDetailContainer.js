import React, {Component} from 'react';
import AtkOpDetail from '../components/AtkOpDetail'

class OpDetailContainer extends Component {
  constructor(){
    super()
    this.state = {
      atkop: [],
    }
  }
  

  componentDidMount = async() => {
    const id  = this.props.location.state.opid;
    await fetch 
    (`http://localhost:8000/api/atkops/${id}`)

    .then(response => response.json())
    .then(info => {
      console.log(info)
      this.setState({atkop : [info.data]} )
    })
    console.log(this.state.atkop)
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