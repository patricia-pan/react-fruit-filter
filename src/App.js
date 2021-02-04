// https://gawdiseattle.gitbook.io/wdi/16-react/react-state/lifting-state

import './App.css';
import React, { Component } from 'react'
import FruitContainer from './FruitContainer'

const fruits = [
  'pear',
  'orange',
  'mango',
  'pineapple',
  'dragonfruit',
  'pomegranate',
  'soursop',
  'kiwi',
  'banana',
  'barf',
  'persimmon',
  'nectarine',
  'starfruit',
  'atis',
  'plum'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <FruitContainer fruits={fruits} />
      </div>
    )
  }
}

export default App
