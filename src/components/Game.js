import React, { Component } from 'react'
import Cell from './Cell'
import { observer } from 'mobx-react'
import { checkGame, createGame } from '../stores/api'
import current from '../stores/game'
import Reset from './Reset'

@observer
class Game extends Component {
  componentDidMount () {
    checkGame(this.props.match.params.id)
    .then(data => {
      current.game = data
    })
  }

  _click = () => {
    createGame(current.game.difficulty)
    .then(data => {
      current.game = data
      window.location = `/game/${data.id}`
    })
  }

  render () {
    const gameBoard = current.game.board.map((_, i) => {
      return current.game.board[i].map((col, j) => {
        return <Cell row={i} col={j}
          value={col.toString()}
          content={current.game.board[i][j]}
          id={this.props.match.params.id} />
      })
    })
    if (current.game.state === 'won') {
      setTimeout(() => { window.location = '/winner' }, 1000)
    } else if (current.game.state === 'lost') {
      setTimeout(() => { window.location = '/loser' }, 1000)
    } else {
      return <div className='game'>
        <div className='gameGrid'>
          {gameBoard}
        </div>
        <Reset />
      </div>
    }
  }
}

export default Game
