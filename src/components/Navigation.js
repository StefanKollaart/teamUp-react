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
    const { signedIn, admin } = this.props

    console.log(this.props)
    return (
      <nav>
        {(signedIn && <Link to={`/`}>Team Up</Link>)}
        {(signedIn && <Link to='#' onClick={this.signOut.bind(this)}>Sign Out</Link>)}
      </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id),
  admin: (!!currentUser && !!currentUser.admin == true)
})

export default connect(mapStateToProps, { signOut })(Navigation)
