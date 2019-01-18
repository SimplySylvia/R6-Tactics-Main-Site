import React, {Component} from 'react'
import {Button, Modal, Segment, Form, Input} from 'semantic-ui-react'

class Signup extends Component {
  render(){
    return(
        <Modal className="Signup" trigger={<Button primary> Sign Up </Button>} centered={false}>
          <Modal.Header>Sign Up</Modal.Header>
              <Modal.Content>
                <Segment inverted className='signupForm'>
                  <Form inverted >
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
                    <Button icon='signup' content='Signup' type='submit' onClick={this.props.handleSignUp}></Button>
                  </Form>
                  <div className='signInfo'>
                    <h1>stuffs will go here</h1>
                  </div>
                </Segment>
              </Modal.Content>
          </Modal>
    )
  }
}

export default Signup