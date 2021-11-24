import React from 'react'
import FormReg from './components/formReg'
import FormAuth from './components/formReg'

import './styles/style.less'

export default class App extends React.Component{
  render(){
    return (
      <main className="name">
        <FormReg formText="Регистрация" />
        <FormAuth formText="Авторизация" />
      </main>
    )
  }
}