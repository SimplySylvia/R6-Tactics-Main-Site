import React, {Component} from 'react'
import {Button, Modal, Segment, Form, Input,} from 'semantic-ui-react'

class Login extends Component {
  render(){
    return(
      <Modal className="login" trigger={<Button primary> Log In </Button>} centered={false}>
      <Modal.Header>Login</Modal.Header>
          <Modal.Content>
                <Segment inverted className='loginForm'>
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
    )
  }
}

export default Login