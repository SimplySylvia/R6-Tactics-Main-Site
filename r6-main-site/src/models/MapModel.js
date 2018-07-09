import axios from 'axios'

class MapModel {
  static all(){
    let request = axios.get('http://localhost:8000/api/smaps')
    return request
  }
}

export default MapModel