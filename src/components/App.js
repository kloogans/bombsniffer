import React, { Component } from 'react'
import { BrowserRouter as Router,
  Link,
  Route
  } from 'react-router-dom'
import Game from './Game'
import Home from './Home'
import Loser from './Loser'
import Winner from './Winner'
import current from '../stores/game'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <header>
          <Link to='/'>
            <div className='topHead'>
              <h1>BOMBSNIFFER</h1>
            </div>
          </Link>
        </header>
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/game/:id' component={Game} />
          <Route exact path='/winner' component={Winner} />
          <Route exact path='/loser' component={Loser} />
        </main>
        <footer>
          &copy; James O'Brien 2017
        </footer>
      </div>
    </Router>
  }
  }

export default App
