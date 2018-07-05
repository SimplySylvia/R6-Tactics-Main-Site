import React, { Component } from 'react';
import MyRoutes from './config/routes';
import FixedMenuLayout from './components/fixedHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
      <FixedMenuLayout/>
        { MyRoutes }
      </div>
    );
  }
}

export default App;