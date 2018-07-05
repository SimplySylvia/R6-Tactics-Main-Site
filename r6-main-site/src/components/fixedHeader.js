import React from 'react'
import {Container,Dropdown,Image,Menu,Button, MenuItem} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='./images/logo.png' style={{ marginRight: '1.5em' }} />
          R6 Tactics
        </Menu.Item>
        <Menu.Item as='a'><Link to={'/'}>Home</Link></Menu.Item>

        <Dropdown item simple text='Menu'>
          <Dropdown.Menu>
            <Dropdown.Item>Strats</Dropdown.Item>
            <Dropdown.Item>Forum</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Game Details</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Operators</span>
              <Dropdown.Menu>
                <Dropdown.Item ><Link className="subMenu" to={'/AttackOps'}>Attack Operators</Link></Dropdown.Item>
                <Dropdown.Item ><Link className="subMenu" to={'/DefenseOps'}>Defense Operators</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Maps</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item position='right'>
        <Button as='a' primary> Sign In </Button>
        <Button as='a' primary> Sign Up </Button>
        </Menu.Item>
      </Container>
    </Menu>
  </div>
)

export default FixedMenuLayout