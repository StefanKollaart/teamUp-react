import API from '../../middleware/api'
import loadError from '../load-error'
import loadSuccess from '../load-success'
import loading from '../loading'

export const FETCHED_PAIRS = 'FETCHED_PAIRS'

const api = new API()
const pairs = api.service('pairs')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    pairs.find()
      .then((result) => {
        dispatch(loadSuccess())
        dispatch(fetchedPairs(result))
      }).catch((error) => {
        dispatch(loadError(error))
      }).then(() => {
        dispatch(loading(false))
      })
    }
}

const fetchedPairs = (result) => {
  return {
    type: FETCHED_PAIRS,
    payload: [].concat(result.data)
  }
}
