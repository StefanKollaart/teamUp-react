import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchClassDays from '../actions/classDays/fetch'

export class ClassDayPage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchClassDays()
  }


  render() {
    const {_id, date, allStudents, pickableStudents, pairs} = this.props

    return(
      <div className="classday page">
        <h1>{date}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ classDays }, { params }) => {
  const classDay = classDays.reduce((prev, next) => {
    if (next._id === params.classDayId) {
      return next
    }
    return prev
  }, {})

  return {
    ...classDay
  }
}

export default connect(mapStateToProps, { fetchClassDays })(ClassDayPage)
