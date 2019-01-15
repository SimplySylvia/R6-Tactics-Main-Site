import React, { Component } from 'react';
import MyRoutes from './config/routes';
import FixedMenuLayout from './components/fixedHeader'

class App extends Component {
  state={
    verified: false
  }
  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        verified: true
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
      <FixedMenuLayout verified={this.state.verified}/>
        { MyRoutes }
      </div>
    );
  }
}

export default App;