import API from '../../middleware/api'
const api = new API()
const classDays = api.service('classdays')
const pairService = api.service('pairs')
import { history } from '../../store'
import updatePair from '../classDays/updatePair'
export const CREATE_PAIR = 'CREATE_PAIR'


const errors = require('feathers-errors')

export default function match(currentDay, isNewDay) {
  return function(dispatch) {
    console.log(currentDay)
    api.app.authenticate()
      .then((authResponse) => {
        console.log(authResponse)
          let pickedStudents = [authResponse.data]
          var i = 0;
            while(i < 1) {
            var randomNumber = Math.floor(Math.random() * currentDay.pickableStudents.length)
            let students = currentDay.pickableStudents.filter(function(student, index) {
              if(randomNumber == index) {
                return student
              }
            })
            if(!pickedStudents.includes(students[0])) {
              pickedStudents.push(students[0])
              i++
            }
          }

        console.log(pickedStudents)
        console.log(authResponse.token)
        // maak een pair met pickedStudents
        pairService.create(Object.assign({}, {students: pickedStudents}, {token:authResponse.token}))
          .then((createdPair) => {
            dispatch({
              type: CREATE_PAIR,
              payload: createdPair.data
            })
            console.log(createdPair)
            dispatch(updatePair(currentDay, createdPair, isNewDay))
          }).catch((error) => {
            console.log(error)
          })


      }).catch((error) => {
        console.error(error)
      })
    }
  }
