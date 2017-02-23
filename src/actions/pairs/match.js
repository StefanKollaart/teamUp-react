import API from '../../middleware/api'
const api = new API()
const classDays = api.service('classdays')
const pairService = api.service('pairs')
import { history } from '../../store'
import updatePair from '../classDays/updatePair'

const errors = require('feathers-errors')

export default function match(currentDay) {
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
            console.log(createdPair)
            updatePair(currentDay, createdPair)
          }).catch((error) => {
            console.log(error)
          })


      }).catch((error) => {
        console.error(error)
      })
      return
    }
