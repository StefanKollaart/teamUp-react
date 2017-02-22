import React, { PureComponent, PropTypes } from 'react'
import StudentItem from '../components/StudentItem'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class PairItem extends PureComponent {
  static propTypes = {
    date: PropTypes.string.isRequired,
    students: PropTypes.array.isRequired,
  }

  renderStudent(student, index) {
    return <StudentItem key={index} {...student} />
  }

  render() {
    const {_id, date, students} = this.props

    return(
      <article className="pair">
        <div>
          <p><Link to={`/pairs/${_id}`}>On { date }, this is your team:</Link></p>
          <ul>
            {console.log(this.props.students)}
            {((this.props.students) && students.map(this.renderStudent))}
          </ul>
        </div>
      </article>
    )
  }
}

export default PairItem
