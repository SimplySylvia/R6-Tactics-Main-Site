import axios from 'axios'
import {BASEPATH} from '../helper.js'

class AtkopModel {
  static all(){
    let request = axios.get(`${BASEPATH}/api/atkops`)
    return request
  }
}

export default AtkopModel