import React, { Component } from 'react'
import Difficulty from './Difficulty'

class Home extends Component {
  render () {
    const diffClass = ['easy', 'medium', 'hard']
    return <div className='Home'>

      <div className='bombDisplay' />
      <p>Select your difficulty</p>
      <div className='selectGame'>
        <Difficulty diff={0} diffClass={diffClass[0]} />
        <Difficulty diff={1} diffClass={diffClass[1]} />
        <Difficulty diff={2} diffClass={diffClass[2]} />
      </div>
    </div>
  }
}

export default Home
