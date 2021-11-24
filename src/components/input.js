import React from 'react'

import '../styles/form/input.less'

export default class Input extends React.Component{
  render(){
    return (
      <input className="form__input" type="text" placeholder={this.props.placeholder} />
    )
  }
}