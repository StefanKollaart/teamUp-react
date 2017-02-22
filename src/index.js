import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'

import PairsContainer from './pairs/PairsContainer'
import PairPage from './pairs/PairPage'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={PairsContainer} />
      <Route path="/pairs/:pairId" component={PairPage} />
    </Route>
  </Router>
</Provider>,
  document.getElementById('root')
)
