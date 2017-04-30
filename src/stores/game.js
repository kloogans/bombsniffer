import { observable } from 'mobx'

class CurrentGame {
  @observable game = { board: [] }
}

const current = new CurrentGame()

window.current = current

export default current
