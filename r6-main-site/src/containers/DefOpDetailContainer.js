import React, {Component} from 'react';
import DefOpDetail from '../components/DefOpDetail'

class OpDetailContainer extends Component {
  constructor(){
    super()
    this.state = {
      defop: [],
    }
  }
  

  componentDidMount = async() => {
    const id  = this.props.location.state.opid;
    await fetch 
    (`http://localhost:8000/api/defops/${id}`)

    .then(response => response.json())
    .then(info => this.setState({defop : [info.data]} ))
  }




  render(){
    let defop = this.state.defop.map( (defop, i) => {
      return (
        <DefOpDetail
          defop={defop}
          key={i} />
      )
    })
    return(

  <div className="opDetail" >
  {defop}

  </div>
  
    )
  }
}

export default OpDetailContainer