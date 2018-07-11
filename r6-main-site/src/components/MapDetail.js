import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import MapOptions from './MapOptions';
import MapViewer from './MapViewer';

class MapDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedFloor: '',
    }
    this.onSelectFloor = this.onSelectFloor.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  onSelectFloor(floor){
    console.log("I CLICKED A FLOOR");
    this.setState({
       selectedFloor: floor
    })
    console.log("HELLO Floor: ", this.state.selectedFloor)
  }
  componentWillMount(){
    this.setState((prevState, props) => {
      return { selectedFloor:  props.map.floors[0]}
   });
  }

  render(){
    console.log("STATE!")
    console.log("WE'RE PASSING IN :", this.state.selectedFloor.name)
    return(

  <div className="mapDetailPage">
  <div className="mapDetailHeader">
      <h3>{this.props.map.name}</h3>
  </div>
  <section className='createBut'>
    <Button className='creAtkBut'>Create Attack Plan</Button>
    <Button className='creDefBut'>Create Defense Plan</Button>
  </section>
      
  <section className='mapSection'>
      <MapViewer map={this.props.map} selectedFloor={this.state.selectedFloor} onClick={this.forceUpdateHandler}/>
      <MapOptions map={this.props.map} selectedFloor={this.state.selectedFloor} onSelectFloor={this.onSelectFloor} forceUpdate={this.forceUpdateHandler}/>
  </section>
  </div>
  
    )
  }
}


export default MapDetail