import axios from 'axios'

class AtkopIdModel {
  static find(id){
    let request = axios.get(`http://localhost:8000/api/atkops/${id}`)
    return request
  }
}

export default AtkopIdModel