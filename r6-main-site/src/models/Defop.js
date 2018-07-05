import axios from 'axios'

class DefopModel {
  static all(){
    let request = axios.get('http://localhost:8000/api/defops')
    return request
  }
}

export default DefopModel