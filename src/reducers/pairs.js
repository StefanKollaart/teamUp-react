import { FETCHED_PAIRS } from '../actions/pairs/fetch'
import { CREATE_PAIR } from '../actions/pairs/match'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_PAIRS:
      return[].concat(payload)

    case CREATE_PAIR:
      return [Object.assign({}, payload)].concat(state)

    default:
      return state
  }
}
