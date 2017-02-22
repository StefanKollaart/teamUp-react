import { APP_LOADING, APP_DONE_LOADING } from '../actions/loading'

export default (state = false, { type, payload } = {}) => {
  switch(type) {
    case APP_LOADING:
      return true

    case APP_DONE_LOADING:
      return false

    default:
      return state
  }

}
