import ReactDOM from 'react-dom'
import React from 'react'
import routes from './routes'
import Cache from '../shared/cache'

let cache = new Cache(window.$data());

ReactDOM.render(routes,
  document.getElementById('react')
)
