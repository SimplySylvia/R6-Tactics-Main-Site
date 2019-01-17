import React, {Component} from 'react'

class ProfileContainer extends Component{
    state={
      user: this.props.user
    }
    componentDidMount(){
      console.log('mounted profile')
    }
    render(){
      return (
        <div className='profileContainer'>
          <h1>Coming Soon</h1>
        </div>
      )
    }
  }
  
  export default ProfileContainer