import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RenderStudent from '../components/RenderStudent'

class ClassDayItem extends PureComponent {
  static propTypes = {
    date: PropTypes.string.isRequired,
    pickableStudents: PropTypes.array.isRequired,
    pairs: PropTypes.array.isRequired,
    allStudents: PropTypes.array.isRequired,
  }


  renderStudent(student, index) {
    return <RenderStudent key={index} {...student} />
  }

  render() {
    const {_id, date, allStudents, pickableStudents, pairs} = this.props
    console.log(this.props.pickableStudents)

    return(
      <article className="pair">
        <div>
          <p><Link to={`/classdays/${_id}`}>On { date }, this is your team:</Link></p>
          <ul>
            {((pickableStudents) && this.props.pickableStudents.map(this.renderStudent))}
          </ul>
        </div>
      </article>
    )
  }
}

export default ClassDayItem
