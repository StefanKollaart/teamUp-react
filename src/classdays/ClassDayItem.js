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
    const {_id, date, allStudents, pickableStudents, pairs} = this.props
    console.log(this.props.pairs)

    return(
      <article className="pair">
        <div>
          {(date === getDate() && <h2>Today, this is your team:</h2>)}
          {((allStudents && date === getDate()) && this.props.pairs.map(this.renderPairs))}

          {(date !== getDate() && <p><Link to={`/classdays/${_id}`}>{ date }</Link></p>)}
        </div>
      </article>
    )
  }
}

export default ClassDayItem
