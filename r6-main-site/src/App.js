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
    let token = localStorage.token
    if (localStorage.token) {
      console.log('tokenfound', token)
      axios({ method: 'post', url: `${AUTH}/verify`, headers: { authorization: `Bearer ${token}` } })
      .then((response)=>{
        console.log(response)
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

  handleLogOut = () => {
    this.setState({
      verified: false
    })
    localStorage.clear()
  }

  render() {
    return (
      <div className="App">
      <FixedMenuLayout 
          verified={this.state.verified}
          handleLogOut={this.handleLogOut}
        />
        { MyRoutes }
      </div>
    );
  }
}

export default App;