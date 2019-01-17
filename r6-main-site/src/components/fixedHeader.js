import React, {Component} from 'react'
import {Container,Dropdown,Image,Menu,Button, Modal, Segment, Form, Input} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

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
            <Dropdown.Item ><Link className="subMenu" to={''}>Profile</Link></Dropdown.Item>
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

        <Modal className="Signup" trigger={<Button primary> Sign Up </Button>} centered={false}>
          <Modal.Header>Sign Up</Modal.Header>
              <Modal.Content>
                <Segment inverted>
                  <Form inverted>
                  <Form.Field required>
                    <label>Email</label>
                    <Input placeholder='Email' name='email' onChange={this.props.handleInput}/>
                  </Form.Field>
                  <Form.Field required>
                    <label>Password</label>
                    <Input type='password' placeholder='Password' name='password' onChange={this.props.handleInput}/>
                  </Form.Field>
                  <Form.Field required>
                    <label>Re-enter Password</label>
                    <Input type='password' placeholder='Password' name='password2' onChange={this.props.handleInput}/>
                  </Form.Field>
                  <hr/>
                  <Form.Field required>
                    <label>Username</label>
                    <Input placeholder='' name='username' onChange={this.props.handleInput}/>
                  </Form.Field>
                  <Form.Field >
                    <label>Uplay Account Name</label>
                    <Input placeholder='' name='uplay' onChange={this.props.handleInput}/>
                    <p>This will allow you to view your stats!</p>
                  </Form.Field>
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Button type='submit' onClick={this.props.handleSignUp}>Submit</Button>
                  </Form>
                </Segment>
              </Modal.Content>
          </Modal>

          <Modal className="login" trigger={<Button primary> Log In </Button>} centered={false}>
          <Modal.Header>Login</Modal.Header>
              <Modal.Content>
                <Segment inverted>
                  <Form inverted>
                  <Form.Field required>
                    <label>Email</label>
                    <Input placeholder='Email' name='email' onChange={this.props.handleInput}/>
                  </Form.Field>
                  <Form.Field required>
                    <label>Password</label>
                    <Input type='password' placeholder='Password' name='password' onChange={this.props.handleInput}/>
                  </Form.Field>
                    <Button type='submit' onClick={this.props.handleLogIn}>Submit</Button>
                  </Form>
                </Segment>
              </Modal.Content>
          </Modal>

        </Menu.Item>
      </Container>
    </Menu>
  </div>
    )
  }
}

export default FixedMenuLayout