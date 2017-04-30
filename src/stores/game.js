import { observable } from 'mobx'

class CurrentGame {
  @observable game = {
    board: [],
    mines: [],
    state: 'start'
  }
}

const current = new CurrentGame()

window.current = current

export default current
