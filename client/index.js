import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './App'
import User from './components/Users'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <User />
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
