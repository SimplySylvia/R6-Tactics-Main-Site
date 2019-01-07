import axios from 'axios'
import {BASEPATH} from '../helper.js'

class MapModel {
  static all(){
    let request = axios.get(`${BASEPATH}/api/smaps`)
    return request
  }
}

export default MapModel