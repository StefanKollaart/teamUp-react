import API from '../../middleware/api'
const api = new API()
const classDays = api.service('classdays')
import { history } from '../../store'
const errors = require('feathers-errors')

export const UPDATE_CLASSDAY = 'UPDATE_CLASSDAY'
export const CREATE_CLASSDAY = 'CREATE_CLASSDAY'

export default function updatePair(currentDay, createdPair, isNewDay) {
  return function (dispatch) {
    console.log(currentDay, createdPair)
    api.app.authenticate()
      .then((authResponse) => {
        console.log(authResponse)
        const stillPickable = currentDay.pickableStudents.filter(function(student) {
          if((createdPair.students[0]._id != student._id) && (createdPair.students[1]._id !== student._id)) {
            return student
          }
        })
        currentDay.pickableStudents = stillPickable
        currentDay.pairs.push(createdPair)
        console.log(stillPickable)
        console.log(authResponse.token)
        console.log(currentDay)
        console.log(Object.assign({}, {pickableStudents: currentDay.pickableStudents}, {token:authResponse.token}))
        classDays.patch(currentDay._id, (Object.assign({}, { pickableStudents: currentDay.pickableStudents, allStudents: currentDay.allStudents, pairs: currentDay.pairs }, { token:authResponse.token })))
        .then((changedClassDay) => {
          if(isNewDay) {
            dispatch({
              type: CREATE_CLASSDAY,
              payload: changedClassDay
            })
          } else {
            dispatch({
              type: UPDATE_CLASSDAY,
              payload: changedClassDay
            })
          }

        }).catch((error) => {
          console.error(error)
        })
      }).catch((error) => {
        console.error(error)
      })
    }
  }
