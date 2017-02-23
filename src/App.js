import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './components/Navigation'

class App extends React.Component {
  render() {
    return (
      <div>
          <Navigation />
          { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
})


export default connect (mapStateToProps)(App)
