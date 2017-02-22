import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchPairs from '../actions/pairs/fetch'

export class PairPage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchPairs()
  }

  render() {
    const { date } = this.props

    return(
      <div className="pair page">
        <h1>{date}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ pairs }, { params }) => {
  const pair = pairs.reduce((prev, next) => {
    if (next._id === params.pairId) {
      return next
    }
    return prev
  }, {})

  return {
    ...pair
  }
}

export default connect(mapStateToProps, { fetchPairs })(PairPage)
