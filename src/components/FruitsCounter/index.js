import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMangoIncrease = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBananaIncrease = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bdContainer">
        <div className="contentContainer">
          <h1 className="heading">
            Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="imageContentContainer">
            <div className="imgContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="btn"
                type="button"
                onClick={this.onMangoIncrease}
              >
                Eat Mango
              </button>
            </div>
            <div className="imgContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="btn"
                type="button"
                onClick={this.onBananaIncrease}
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
