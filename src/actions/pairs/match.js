import API from '../../middleware/api'
const api = new API()
const classDays = api.service('classdays')
import { history } from '../../store'
// import match from '../pairs/match'

export default function match(user) {
    api.app.authenticate()
      .then(() => {
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
            console.log(matchingDay)
            if(matchingDay.length == 0) {
              console.log(result)
              // match(result)
            }
          })
      })
      .catch((error) => {
        console.error(error)
      })
      return
}
