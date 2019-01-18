import React, {Component} from 'react'
import {Container,Dropdown,Image,Menu,Button, Modal, Segment, Form, Input, Divider, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Signup from './modals/Signup'
import Login from './modals/Login'

class FixedMenuLayout extends Component {
  render(){
    if(this.props.verified){
      let username = this.props.user.username

      let divStyle = {
        backgroundImage: `url(./images/mira.jpg)`,
      }
      const trigger = (
        <div className='trigger'>
        <p>{this.props.user.username}</p>
          <div style={divStyle} className='image-cropper'></div><i aria-hidden="true" class="dropdown icon"></i>
        </div>
      )
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
        
        <Menu.Item className='profImg' position='right'>
          <Dropdown item simple trigger={trigger} icon={null}>
          <Dropdown.Menu>
            <Dropdown.Item ><Link className="subMenu" to={`/profile/${username}`}>Profile</Link></Dropdown.Item>
            <Dropdown.Item className='logout'><div className="subMenu logout" onClick={this.props.handleLogOut}>Logout</div></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
        <Signup 
          handleInput={this.props.handleInput} 
          handleSignUp={this.props.handleSignUp}
          />

        <Login 
          handleInput={this.props.handleInput}
          handleLogIn={this.props.handleLogIn}
        />
        </Menu.Item>
      </Container>
    </Menu>
  </div>
    )
  }
}

export default FixedMenuLayout