import React, { Component } from 'react'
import { observer } from 'mobx-react'
import current from '../stores/game'
import { check, flag } from '../stores/api'

const selectClass = {
  ' ': 'empty',
  '_': 'unrevealed',
  'F': 'flagged',
  '@': 'flagbomb',
  '*': 'bomb'
}

@observer
class Cell extends Component {
  _click = e => {
    check(this.props.id, this.props.row, this.props.col)
    .then(data => {
      current.game = data
    })
  }

  _flagCell = e => {
    e.preventDefault()
    flag(this.props.id, this.props.row, this.props.col)
      .then(data => {
        current.game = data
      })
  }

  render () {
    return <div className={'Cell ' + selectClass[this.props.value] || 'numbered'}
      style={{gridRow: `${this.props.row + 1}`, gridCol: `${this.props.col + 1}fr`}}
      onClick={this._click}
      onContextMenu={this._flagCell}>
      <span>{this.props.value.match(/\d/) ? this.props.value : null}</span>
    </div>
  }
}
export default Cell
