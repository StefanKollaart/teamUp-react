import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RenderStudent from '../components/RenderStudent'

class RenderPairs extends PureComponent {
  static propTypes = {
    students: PropTypes.array.isRequired,
  }

  renderStudent(pairs, index) {
    return <RenderStudent key={index} {...pairs} />
  }

  render() {
    const {students} = this.props
    console.log(this.props.students)

    return(
      <article className="pair">
        <div>
          <ul>{((students) && this.props.students.map(this.renderStudent))}</ul>
        </div>
      </article>
    )
  }
}

export default RenderPairs
