import axios from 'axios'

class AtkopModel {
  static all(){
    let request = axios.get('http://localhost:8000/api/atkops')
    return request
  }
}

export default AtkopModel