import axios from 'axios'
import {BASEPATH} from '../config/constants'

class AtkopModel {
  static all(){
    let request = axios.get(`${BASEPATH}/api/atkops`)
    return request
  }
}

export default AtkopModel