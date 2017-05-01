import React, { Component } from 'react'
import { createGame } from '../stores/api'
import current from '../stores/game'

class Difficulty extends Component {
  _click = () => {
    createGame(this.props.diff)
    .then(data => {
      current.game = data
      window.location = `/game/${data.id}`
    })
  }

  render () {
    return <button onClick={this._click}>
      <div className={'difficulty ' + this.props.diffClass} />
    </button>
  }
}

export default Difficulty
