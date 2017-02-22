import React, { PureComponent, PropTypes } from 'react'

class RenderStudent extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    const {name} = this.props

    return(
      <li>{name}</li>
    )
  }
}

export default RenderStudent
