import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoadingScreen from './LoadingScreen'
import AddScreen from './AddScreen'
import ListScreen from './ListScreen'
import { LOADING_SCREEN, ADD_SCREEN, LIST_SCREEN } from '../domain/screens'

class App extends Component {
  render() {
    const { screen } = this.props
    
    switch(screen) {
      case LOADING_SCREEN:
        return <LoadingScreen />
      case ADD_SCREEN:
        return <AddScreen />
      case LIST_SCREEN:
        return <ListScreen />
      default:
        return (<span>Error: Unknown screen</span>)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    screen: state.screen
  }
}

export default connect(
  mapStateToProps,
  null
)(App)
