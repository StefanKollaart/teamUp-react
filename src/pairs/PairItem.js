import React, { PureComponent } from 'react'
import StudentItem from './StudentItem'

class PairItem extends PureComponent {
  renderStudent(student, index) {
    return <StudentItem key={index} {...student} />
  }

  render() {
    const {date, students} = this.props

    return(
      <article className="pair">
        <div>
          <p>On { date }, this is your team:</p>
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
