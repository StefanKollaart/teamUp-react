import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import ClassDayItem from './ClassDayItem'
import fetchClassDays from '../actions/classDays/fetch'
import { Link } from 'react-router'
import SignIn from '../users/SignIn'

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
   if(this.props.currentUser === null) {
     return(
       <div>
         <h1>Team Up</h1>
         <SignIn />
         <p>Not an user yet? Don't worry, we're not Jimmy Who. <Link to={`sign-up`}>Sign up.</Link></p>
       </div>

     )
   } else {
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
}

const mapStateToProps = ({ classDays, currentUser }) => ({
  classDays, currentUser
})

export default connect(mapStateToProps, {fetchClassDays})(ClassDaysContainer)
