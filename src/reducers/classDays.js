import { FETCHED_CLASSDAYS } from '../actions/classDays/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_CLASSDAYS:
      return[].concat(payload)

    default:
      return state
  }
}
