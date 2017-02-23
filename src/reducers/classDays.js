import { FETCHED_CLASSDAYS } from '../actions/classDays/fetch'
import { CREATE_CLASSDAY } from '../actions/classDays/updatePair'
import { UPDATE_CLASSDAY } from '../actions/classDays/updatePair'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_CLASSDAYS:
      return[].concat(payload)

    case CREATE_CLASSDAY :
      return [Object.assign({}, payload)].concat(state)

    case UPDATE_CLASSDAY :
          return state.map((classDay) => {
            if (classDay._id === payload._id) {
              return Object.assign({}, payload)
            }
            return classDay
          })

    default:
      return state
  }
}
