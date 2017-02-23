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
    const {students, currentUser} = this.props

    function isMyPair(students) {
      const isPresent = students.filter(function(student) {
        if (student._id == currentUser._id) {
          return true
        }
      })
      if (isPresent.length == 1) {
        return true
      } else {
        return false
      }
    }

    if (currentUser.admin) {
      return(
        <article className="pair">
          <div>
            <ul>{((students) && this.props.students.map(this.renderStudent))}</ul>
          </div>
        </article>
      )
    } else {
      return(
        <article className="pair">
          <div>
            <ul>{((isMyPair(students)) && this.props.students.map(this.renderStudent))}</ul>
          </div>
        </article>
      )
    }

  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
})

export default connect(mapStateToProps)(RenderPairs)
