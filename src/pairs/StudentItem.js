import React, { PureComponent } from 'react'

class StudentItem extends PureComponent {
  render() {
    const {name} = this.props

    return(
      <li>{name}</li>
    )
  }
}

export default StudentItem
