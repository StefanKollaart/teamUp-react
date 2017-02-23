import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchClassDays from '../actions/classDays/fetch'
import RenderPairs from '../components/RenderPairs'

export class ClassDayPage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchClassDays()
  }

  renderPairs(pairs, index) {
    return <RenderPairs key={index} {...pairs} />
  }

  render() {
    console.log(this.props.currentUser)
    const {_id, date, allStudents, pickableStudents, pairs} = this.props

    if(this.props.currentUser.admin) {
      return(
        <div className="classday page">
          <h2>Teams for {date}:</h2>
          {(!!pairs && this.props.pairs.map(this.renderPairs))}
        </div>
      )
    } else {
      return(
        <div className="classday page">
          <h2>On {date}, you've been in a team with:</h2>
          {(!!pairs && this.props.pairs.map(this.renderPairs))}
        </div>
      )
    }
  }
}

const mapStateToProps = ({ classDays, currentUser }, { params }) => {
  const classDay = classDays.reduce((prev, next) => {
    if (next._id === params.classDayId) {
      return next
    }
    return prev
  }, {})

  return {
    ...classDay,
    currentUser
  }
}

export default connect(mapStateToProps, { fetchClassDays })(ClassDayPage)
