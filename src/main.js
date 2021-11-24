import React from 'react'
import ReactDom from 'react-dom'

import App from './app'
import './styles/form/index.less'

ReactDom.render(
  <App/>,
  document.querySelector('.app')
)