import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RenderPairs from '../components/RenderPairs'
import getDate from '../actions/classDays/getDate'
import Match from '../actions/pairs/match'

class ClassDayItem extends PureComponent {
  static propTypes = {
    date: PropTypes.string.isRequired,
    pickableStudents: PropTypes.array.isRequired,
    pairs: PropTypes.array.isRequired,
    allStudents: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const thisDay = {
      _id: this.props._id,
      allStudent: this.props.allStudents,
      date: this.props.date,
      pairs: this.props.pairs,
      pickableStudents: this.props.pickableStudents
    }

    this.props.Match(thisDay, false, false)

  }

  renderPairs(pairs, index) {
    return <RenderPairs key={index} {...pairs} />
  }

  render() {
    const {_id, date, allStudents, pickableStudents, pairs, currentUser} = this.props

    return(
      <article className="pair">
        <div>
          {(((date === getDate()) && (!currentUser.admin)) && <h2>Today ({date}), this is your team:</h2>)}
          {(((date === getDate()) && (currentUser.admin)) && <h2>Today ({date}), this are the teams:</h2>)}
          {((!!pairs && date === getDate()) && this.props.pairs.map(this.renderPairs))}
          {(((date === getDate()) && (currentUser.admin)) && <a href="#" onClick={this.handleClick}>Assign all</a>)}
          {(date === getDate() && <h2>Pick date:</h2>)}
          {<p><Link to={`/classdays/${_id}`}>{ date }</Link></p>}
        </div>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
})

export default connect(mapStateToProps, {Match})(ClassDayItem)
