import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import ClassDayItem from './ClassDayItem'
import fetchClassDays from '../actions/classDays/fetch'
import { Link } from 'react-router'
import signOut from '../actions/user/sign-out'

class ClassDaysContainer extends PureComponent {
  renderClassDays(classday, index) {
    console.log(classday)
    return <ClassDayItem key={index} {...classday} />
  }

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchClassDays()
  }

 render() {
   return(
     <div className="classdays wrapper">
       <header>
        <h1>Team Up</h1>
       </header>

       <main>
         { this.props.classDays.map(this.renderClassDays) }
       </main>

     </div>
   )
 }
}

const mapStateToProps = ({ classDays }) => ({
  classDays
})

export default connect(mapStateToProps, {fetchClassDays})(ClassDaysContainer)
