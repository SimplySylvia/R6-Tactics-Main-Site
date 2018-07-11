import React, {Component} from 'react';
import { Button, Checkbox } from 'semantic-ui-react';
import MapOptions from './MapOptions';
import MapViewer from './MapViewer';
import ToggleDraw from './ToggleDraw';

class MapDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedFloor: '',
      selectedBomb: '',
      selectedSecure: '',
      selectedAtk: '',
      selectedHostage: '',
      canDraw: false,
      selectedColor: 'red',
    }
    this.toggleCanDraw = this.toggleCanDraw.bind(this);
    this.onSelectFloor = this.onSelectFloor.bind(this);
    this.onSelectBomb = this.onSelectBomb.bind(this);
    this.onSelectSecure = this.onSelectSecure.bind(this);
    this.onSelectAtk = this.onSelectAtk.bind(this);
    this.onSelectHostage = this.onSelectHostage.bind(this);
    this.colorChoice = this.colorChoice.bind(this);
  }

  toggleCanDraw(value){
    this.setState({
      canDraw: value,
    })
  }

  colorChoice(color){
    this.setState({
      selectedColor: color
    })
  }

  onSelectFloor(floor){
    this.setState({
       selectedFloor: floor
    })
  }

  onSelectBomb(bomb){
    this.setState({
       selectedBomb: bomb
    })
  }

  onSelectSecure(secure){
    this.setState({
       selectedSecure: secure
    })
  }

  onSelectAtk(atk){
    this.setState({
       selectedAtk: atk
    })
  }
  onSelectHostage(hostage){
    this.setState({
       selectedHostage: hostage
    })
  }

  componentWillMount(){
    this.setState((prevState, props) => {
      return { selectedFloor:  props.map.floors[0]}
   });
  }

  render(){
    return(

  <div className="mapDetailPage">
  <div className="mapDetailHeader">
      <h3>{this.props.map.name}</h3>
  </div>
  <section>
  <section className='drawingSec'>
    <ToggleDraw toggleCanDraw={this.toggleCanDraw} canDraw={this.state.canDraw} selectedColor={this.state.selectedColor} colorChoice={this.colorChoice}/>
    </section>
  <section className='createBut'>
    <Button className='creAtkBut'>Create Attack Plan</Button>
    <Button className='creDefBut'>Create Defense Plan</Button>
  </section>
     </section> 
  <section className='mapSection'>
      <MapViewer
        canDraw={this.state.canDraw}
        map={this.props.map}
        selectedFloor={this.state.selectedFloor}
        selectedBomb={this.state.selectedBomb}
        selectedSecure={this.state.selectedSecure}
        selectedAtk={this.state.selectedAtk}
        selectedHostage={this.state.selectedHostage}
        selectedColor={this.state.selectedColor}
      />
      <MapOptions 
        map={this.props.map} 
        selectedFloor={this.state.selectedFloor} 
        onSelectFloor={this.onSelectFloor}
        selectedBomb={this.state.selectedBomb}
        onSelectBomb={this.onSelectBomb}
        selectedSecure={this.state.selectedSecure}
        onSelectSecure={this.onSelectSecure}
        selectedAtk={this.state.selectedAtk}
        onSelectAtk={this.onSelectAtk}
        selectedHostage={this.state.selectedHostage}
        onSelectHostage={this.onSelectHostage}
      />
  </section>
  </div>
  
    )
  }
}


export default MapDetail