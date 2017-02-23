// src/components/Navigation.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import signOut from '../actions/user/sign-out'
import { Link } from 'react-router'

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
    history.push('/')
  }

  signUp() {
    history.push('/sign-up')
  }

  goHome() {
    history.push('/')
  }

  render() {
    const { signedIn } = this.props
    return (
      <div>
        <span><Link to='#' onClick={this.signOut.bind(this)}>Sign Out</Link> ||  </span>
        <span><Link to={`/sign-in`}>Sign In</Link>  ||  </span>
        <span><Link to={`/sign-up`}>Sign Up</Link>  ||  </span>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
