import { FETCHED_PAIRS } from '../actions/pairs/fetch'
const pairs = [
  {
    date: "2017-2-22",
    students: [
      {name: "Stefan Kollaart", email: "stefankollaart@gmail.com", admin: true}
    ]
  }
]

export default (state = pairs, { type, payload } = {}) => {
  switch(type) {
    case FETCHED_PAIRS:
      return[].concat(payload)

    default:
      return state
  }
}
