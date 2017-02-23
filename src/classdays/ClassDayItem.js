import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RenderPairs from '../components/RenderPairs'
import getDate from '../actions/classDays/getDate'

class ClassDayItem extends PureComponent {
  static propTypes = {
    date: PropTypes.string.isRequired,
    pickableStudents: PropTypes.array.isRequired,
    pairs: PropTypes.array.isRequired,
    allStudents: PropTypes.array.isRequired,
  }

  renderPairs(pairs, index) {
    return <RenderPairs key={index} {...pairs} />
  }

  render() {
    const {_id, date, allStudents, pickableStudents, pairs, currentUser} = this.props
    console.log(this.props.pairs)

    return(
      <article className="pair">
        <div>
          {(((date === getDate()) && (!currentUser.admin)) && <h2>Today, this is your team:</h2>)}
          {(((date === getDate()) && (currentUser.admin)) && <h2>Today's teams:</h2>)}
          {((!!pairs && date === getDate()) && this.props.pairs.map(this.renderPairs))}
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

export default connect(mapStateToProps)(ClassDayItem)
