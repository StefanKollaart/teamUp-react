import API from '../../middleware/api'
import loadError from '../load-error'
import loadSuccess from '../load-success'
import loading from '../loading'

export const FETCHED_CLASSDAYS = 'FETCHED_CLASSDAYS'

const api = new API()
const classDays = api.service('classdays')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    classDays.find()
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
    type: FETCHED_CLASSDAYS,
    payload: [].concat(result.data)
  }
}
