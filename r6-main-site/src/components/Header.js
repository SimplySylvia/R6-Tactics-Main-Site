import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
          <a className="brand-logo">R6 Tactics</a>
            <ul id="nav-mobile" className="right">
              <li className="waves-effect waves-light btn"><Link to={'/'}>Home</Link></li>
              <li className="waves-effect waves-light btn"><Link to={'/AttackOps'}>Attack Operators</Link></li>
              <li className="waves-effect waves-light btn"><Link to={'/DefenseOps'}>Defense Operators</Link></li>
            </ul>
          </div>
        </nav>
        </div>
      </header>
    )
  }
}

export default Header