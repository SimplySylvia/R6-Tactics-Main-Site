import axios from 'axios'

class AtkopIdModel {
  static find(id){
    let request = axios.get(`http://localhost:8000/api/atkops/${id}`)
    console.log(request)
    return request
  }
}

export default AtkopIdModel