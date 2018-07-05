import React from 'react'
import {Container,Dropdown,Image,Menu,} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          R6 Tactics
        </Menu.Item>
        <Menu.Item as='a'><Link to={'/'}>Home</Link></Menu.Item>

        <Dropdown item simple text='Menu'>
          <Dropdown.Menu>
            <Dropdown.Item>Strats</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Operators</span>
              <Dropdown.Menu>
                <Dropdown.Item><Link to={'/AttackOps'}>Attack Operators</Link></Dropdown.Item>
                <Dropdown.Item><Link to={'/DefenseOps'}>Defense Operators</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Maps</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
)

export default FixedMenuLayout