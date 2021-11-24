import React from 'react'

import logo from '../images/logo.png'
import '../styles/form/header_form.less'

export default class HeaderForm extends React.Component{
  render(){
    return (
      <div className="form__header">
        <div className="form__logo">
          <img src={logo} alt={"logo"} />
        </div>
        <p className="form__description">
          Добро пожаловать в твою собственную социальную кибер-реальность
        </p>
      </div>
    )
  }
}