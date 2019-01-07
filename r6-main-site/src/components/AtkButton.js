import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

class AtkButton extends Component {
 
 selectAtk = () => {
    this.props.onSelectAtk(this.props.atk)
 }

  render(){
   
    return(
          <Button onClick={this.selectAtk}  color='orange' >{this.props.atk}</Button>
    )
  }
}


export default AtkButton