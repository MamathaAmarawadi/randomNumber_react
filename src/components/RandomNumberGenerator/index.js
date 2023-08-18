// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    const random = Math.random() * 100
    const num = Math.ceil(random)
    this.setState(prevState => {
      console.log(`${prevState.count}`)
      return {count: num}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button className="button" onClick={this.onGenerate}>
              Generate
            </button>
          </div>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
