import API from '../../middleware/api'
const api = new API()
const pairs = api.service('pairs')
import { history } from '../../store'

export default function match(user) {
    api.app.authenticate()
      .then(() => {
        // check if user already has been paired, if do nothing, else create new pair and add to today. Also check to return to sign-in.
        pairs.update(game, { rows: game.rows })
        .then(() => {
          console.log("Done")
        }).catch((error) => {
          console.log(error)
        })
      })
      .catch((error) => {
        console.error(error)
      })
    dispatch({ type: 'CLASSDAY_UPDATED' })
}
