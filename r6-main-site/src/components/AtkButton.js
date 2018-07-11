import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

class AtkButton extends Component {
  constructor(){
    super();
    this.selectAtk = this.selectAtk.bind(this);
 }
 
 selectAtk(){
    this.props.onSelectAtk(this.props.atk)
    console.log("YOOOO", this.props.atk )
 }

  render(){
   
    return(
          <Button onClick={this.selectAtk}  color='orange' >{this.props.atk}</Button>
    )
  }
}


export default AtkButton