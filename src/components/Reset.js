import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { createGame } from '../stores/api'
import current from '../stores/game'

@observer
class Reset extends Component {
  _click = () => {
    createGame(current.game.difficulty)
    .then(data => {
      current.game = data
      window.location = `/game/${data.id}`
    })
  }
  render () {
    return <button onClick={this._click} className='resetButton'>
      <i className='icon fa fa-refresh' />
    </button>
  }
}

export default Reset
