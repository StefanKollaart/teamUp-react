import API from '../../middleware/api'
import loadError from '../load-error'
import loadSuccess from '../load-success'
import loading from '../loading'
import { history } from '../../store'
import createClassDay from '../classDays/create'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.authenticate(user)
    .then((response) => {
      dispatch(loadSuccess())
        dispatch({
          type: USER_SIGNED_IN,
          payload: response.data
        })
        dispatch(createClassDay(response, user))
        console.log("Test")
        .then(() => {
          console.log("here")
          history.push('/')
        }).catch((error) => {
          console.log(error)
        })
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
