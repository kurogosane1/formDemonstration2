import React, {Component} from 'react'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import Form from './components/form';
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Main />
      </div>
    )
  }
}

export default App
