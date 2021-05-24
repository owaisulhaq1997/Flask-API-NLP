import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {
  state={
    data: ''
  }
  
  componentDidMount()
  {
    axios.get('http://127.0.0.1:5000/getreviews')
    .then(res =>{ this.setState({data: res.data.result})
console.log(this.state.data)
  })}
  render() {
    return (
      <div>
      {this.state.data ?
      this.state.data.map(item => (<div><h1>{item.name}</h1><h1>{item.Result}</h1></div>)): null}
      </div>
    )
  }
}

export default App
