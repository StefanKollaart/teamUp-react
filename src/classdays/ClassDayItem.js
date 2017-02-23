import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RenderPairs from '../components/RenderPairs'

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
          <p><Link to={`/classdays/${_id}`}>On { date }, this is your team:</Link></p>
          <ul>
            {((allStudents) && this.props.pairs.map(this.renderPairs))}
          </ul>
        </div>
      </article>
    )
  }
}

export default ClassDayItem
