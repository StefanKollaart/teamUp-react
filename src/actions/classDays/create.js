import API from '../../middleware/api'
const api = new API()
const classDays = api.service('classdays')
import { history } from '../../store'
const errors = require('feathers-errors');

export default function createClassDay(user, userToAuthenticate) {
    return (dispatch) => {
    console.log(user, userToAuthenticate)
    api.app.authenticate()
      .then((response) => {
        console.log(response)
        console.log(user.data._id)
        // Getting today
        const dateObject = new Date();
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        console.log(year + "-" + month + "-" + day);
        const today = year + "-" + month + "-" + day;

        classDays.find()
          .then((result) => {
            const matchingDay = result.data.filter(function(day) {
              console.log(day.date)
              console.log(today)
              if(day.date == today) {
                return day
              }
            })
            // pairService.create(Object.assign({}, pair, {token:result.token} ))
            console.log(matchingDay)
            if(matchingDay.length == 0) {
              classDays.create(Object.assign({}, {date: today}, {token:user.token}))
                .then((result) => {
                  console.log(result)
                }).catch((error) => {
                  console.log(error)
                })
              }
          })
      })
      .catch((error) => {
        console.error(error)
      })
    }
    return
}
