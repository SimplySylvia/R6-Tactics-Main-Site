import axios from 'axios'
import {BASEPATH} from '../config/constants'
class DefopModel {
  static all(){
    let request = axios.get(`${BASEPATH}/api/defops`)
    return request
  }
}

export default DefopModel