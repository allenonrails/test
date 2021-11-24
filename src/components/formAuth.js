import React from 'react'

import HeaderForm from './header_form'
import Input from './input'
import Button from './button'

import '../styles/form/index.less'

export default class Form extends React.Component{
  
  formTitle = () => <h2 className="form__title">{this.props.formText}</h2>

  render(){
    return (
      <div className="form">
        <HeaderForm/>
        <form className="form">
          <formTitle/>
          <Input placeholder="Придумайте логин"/>
          <Input placeholder="Введите пароль"/>

          <Button text="Начать играть" class="btn-red"/>
          <Button text="Назад"/>
        </form>
      </div>
    )
  }
}