import axios from 'axios'
import {BASEPATH} from '../config/constants'

class MapModel {
  static all(){
    let request = axios.get(`${BASEPATH}/api/smaps`)
    return request
  }
}

export default MapModel