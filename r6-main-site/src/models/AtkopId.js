import axios from 'axios'
import {BASEPATH} from '../config/constants'

class AtkopIdModel {
  static find(id){
    let request = axios.get(`${BASEPATH}/api/atkops/${id}`)
    return request
  }
}

export default AtkopIdModel