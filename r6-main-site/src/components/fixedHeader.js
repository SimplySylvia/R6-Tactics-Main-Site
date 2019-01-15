import React, {Component} from 'react'
import {Container,Dropdown,Image,Menu,Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class FixedMenuLayout extends Component {
  render(){
    if(this.props.verified){
      return(
        <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item>
          <Image className="logo" size='mini' src='./images/logo.png' style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Menu.Item header as='a'><Link to={'/'}>
          R6 META
        </Link></Menu.Item>
        <Dropdown item simple text='Community'>
          <Dropdown.Menu>
            <Dropdown.Item><Link className="subMenu" to={'/Strats'}>Strats</Link></Dropdown.Item>
            <Dropdown.Item><Link className="subMenu" to={'/Forum'}>Forum</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple text='Operators'>
          <Dropdown.Menu>
            <Dropdown.Item ><Link className="subMenu" to={'/AttackOps'}>Attack Operators</Link></Dropdown.Item>
            <Dropdown.Item ><Link className="subMenu" to={'/DefenseOps'}>Defense Operators</Link></Dropdown.Item>  
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as='a'><Link to={'/Maps'}>Maps</Link></Menu.Item>
        <Menu.Item position='right'>
        <Button as='a' primary> Profile </Button>
        <Button as='a' primary> Logout </Button>
        </Menu.Item>
      </Container>
    </Menu>
  </div>
      )
    }
    return(
      <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item>
          <Image className="logo" size='mini' src='./images/logo.png' style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Menu.Item header as='a'><Link to={'/'}>
          R6 META
        </Link></Menu.Item>
        <Dropdown item simple text='Community'>
          <Dropdown.Menu>
            <Dropdown.Item><Link className="subMenu" to={'/Strats'}>Strats</Link></Dropdown.Item>
            <Dropdown.Item><Link className="subMenu" to={'/Forum'}>Forum</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple text='Operators'>
          <Dropdown.Menu>
            <Dropdown.Item ><Link className="subMenu" to={'/AttackOps'}>Attack Operators</Link></Dropdown.Item>
            <Dropdown.Item ><Link className="subMenu" to={'/DefenseOps'}>Defense Operators</Link></Dropdown.Item>  
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as='a'><Link to={'/Maps'}>Maps</Link></Menu.Item>
        <Menu.Item position='right'>
        <Button as='a' primary> Sign In </Button>
        <Button as='a' primary> Sign Up </Button>
        </Menu.Item>
      </Container>
    </Menu>
  </div>
    )
  }
}

export default FixedMenuLayout