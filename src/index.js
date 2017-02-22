import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'

import ClassDaysContainer from './classdays/ClassDaysContainer'
import ClassDayPage from './classdays/ClassDayPage'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={ClassDaysContainer} />
      <Route path="/classdays/:classDayId" component={ClassDayPage} />
      <Route path="sign-up" component={SignUp}/>
      <Route path="sign-in" component={SignIn}/>
    </Route>
  </Router>
</Provider>,
  document.getElementById('root')
)
