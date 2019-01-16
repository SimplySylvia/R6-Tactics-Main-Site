import React, { Component } from 'react';
import MyRoutes from './config/routes';
import FixedMenuLayout from './components/fixedHeader'
import {AUTH} from './config/constants'
import axios from 'axios'

class App extends Component {
  state={
    verified: false
  }
  componentDidMount () {
    this.verify()
  }

  handleLogOut = () => {
    this.setState({
      verified: false
    })
    localStorage.clear()
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    axios.post(`${AUTH}/users/signup`, {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      uplayAccount: this.state.uplay,
    })
    .then( response => {
      localStorage.token = response.data.token
      this.verify()
    })
    .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    axios.post(`${AUTH}/users/login`, {
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      localStorage.token = response.data.token
      this.verify()
    })
    .catch(err => console.log(err))
  }

  verify = () =>{
    let token = localStorage.token
    if (localStorage.token) {
      axios({ method: 'post', url: `${AUTH}/verify`, headers: { authorization: `Bearer ${token}` } })
      .then((response)=>{
        this.setState({
          verified: true,
          userId: response.data.id
        })
      })
    } else {
      this.setState({
        verified: false
      })
    }
  }

  render() {
    return (
      <div className="App">
      <FixedMenuLayout 
          verified={this.state.verified}
          handleLogOut={this.handleLogOut}
          handleInput={this.handleInput}
          handleSignUp={this.handleSignUp}
          handleLogIn={this.handleLogIn}
          handleLogOut={this.handleLogOut}
        />
        { MyRoutes }
      </div>
    );
  }
}

export default App;