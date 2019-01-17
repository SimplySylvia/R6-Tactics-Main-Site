import React, {Component} from 'react'
import axios from 'axios'
import {AUTH} from '../config/constants'
import moment from 'moment'

class ProfileContainer extends Component{
    state={
      foundUser: null
    }
    componentDidMount = async() =>{
      let name = this.props.name
      axios.get(`${AUTH}/users/${name}`).then((response)=>{
        let foundUser = response.data.user
        this.setState({
          foundUser: foundUser
        })
      })
    }
    render(){
      if(this.state.foundUser !== null){
        const {username, uplayAccount, dateJoined} = this.state.foundUser

        let date = new Date(dateJoined)
        var newDate = moment(date)
        return (
          <div className='profileContainer'>
            <h1>{username}</h1>
            <h1>{uplayAccount}</h1>
            <h1>Joined: {newDate.format('MMMM YYYY')}</h1>
          </div>
      )

      } 
      return (<h1>No User Found</h1>)
      
      
    }
  }
  
  export default ProfileContainer