import React from 'react'
import PropTypes from 'prop-types';

import '../styles/form/button.less'

export default class Button extends React.Component{
  static propTypes = {
    text: PropTypes.string.isRequired,
    class: PropTypes.string
  }
  
  static defaultProps = {
    class: ''
  }
  
  classes = `form__btn ${this.props.class}`

  render(){
    return (
      <button className={this.classes}>
        {this.props.text}
      </button>
    )
  }
}