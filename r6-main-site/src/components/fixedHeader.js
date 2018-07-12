import React from 'react'
import {Container,Dropdown,Image,Menu,Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const FixedMenuLayout = () => (
  <div>
    {/* menu section */}
    <Menu fixed='top' inverted>
      <Container>
        {/* menu item logo */}
        <Menu.Item  header>
          <Image className="logo" size='mini' src='./images/logo.png' style={{ marginRight: '1.5em' }} />
          R6 META
        </Menu.Item>
        {/* menu item home */}
        <Menu.Item as='a'><Link to={'/'}>Home</Link></Menu.Item>
        {/* drop down menu */}
        <Dropdown item simple text='Community'>
          <Dropdown.Menu>
            <Dropdown.Item><Link className="subMenu" to={'/Strats'}>Strats</Link></Dropdown.Item>
            <Dropdown.Item><Link className="subMenu" to={'/Forum'}>Forum</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* drop down operators */}
        <Dropdown item simple text='Operators'>
          <Dropdown.Menu>
            <Dropdown.Item ><Link className="subMenu" to={'/AttackOps'}>Attack Operators</Link></Dropdown.Item>
            <Dropdown.Item ><Link className="subMenu" to={'/DefenseOps'}>Defense Operators</Link></Dropdown.Item>  
          </Dropdown.Menu>
        </Dropdown>
        {/* map menu item */}
        <Menu.Item as='a'><Link to={'/Maps'}>Maps</Link></Menu.Item>
        {/* sign in section */}
        <Menu.Item position='right'>
        <Button as='a' primary> Sign In </Button>
        <Button as='a' primary> Sign Up </Button>
        </Menu.Item>
      </Container>
    </Menu>
  </div>
)

export default FixedMenuLayout