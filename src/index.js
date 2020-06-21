import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import BoxCon from './container/box-container'

class App extends React.Component {
  render() {
    return (
      <div>
        <BoxCon></BoxCon>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))