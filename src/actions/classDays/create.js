import API from '../../middleware/api'
const api = new API()
const classDays = api.service('classdays')
const userService = api.service('users')
import getDate from './getDate'
import { history } from '../../store'
import match from '../pairs/match'

const errors = require('feathers-errors')

export default function createClassDay(user) {
    console.log(user)
    api.app.authenticate()
      .then((response) => {
        const today = getDate()

        classDays.find()
          .then((result) => {
            const matchingDay = result.data.filter(function(day) {
              if(day.date == today) {
                return day
              }
            })

            if(matchingDay.length == 0) {
              userService.find()
              .then((allUsers) => {
                classDays.create(Object.assign({}, {date: today, allStudents: allUsers.data, pickableStudents: allUsers.data}, {token:user.token}))
                  .then((createdDay) => {
                    match(createdDay)
                  }).catch((error) => {
                    console.error(error)
                  })
                }).catch((error) => {
                  console.error(error)
                })
              } else if(matchingDay.length == 1) {
                console.log(matchingDay[0].pairs)
                console.log(user.data._id) // user id
                const isAlreadyMatched = matchingDay[0].pairs.filter(function(pair) {
                  console.log(pair.students[0]._id, pair.students[1]._id, user.data._id)
                  if((pair.students[0]._id == user.data._id) || (pair.students[1]._id == user.data._id)) {
                    return true
                  }
                })
                console.log(isAlreadyMatched)
                if(isAlreadyMatched.length == 0) {
                  match(matchingDay[0])
                }
              }
          })
      })
      .catch((error) => {
        console.error(error)
      })
      return

}
