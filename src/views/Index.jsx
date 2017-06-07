import React from 'react'
import PropTypes from 'prop-types'

module.exports = class App extends React.Component {
  static get propTypes() { return { data: PropTypes.object } }

  render() {
    return <h1>{this.props.data.hello}</h1>
  }
}
