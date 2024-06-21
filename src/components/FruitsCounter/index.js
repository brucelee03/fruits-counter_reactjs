import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onEatingMangoes = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onEatingBananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-container">
        <div className="fruit-counter">
          <h1 className="heading">
            Bob ate<span className="counter"> {mangoes} </span>mangoes
            <span className="counter"> {bananas} </span>bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit-card">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatingMangoes}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-card">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatingBananas}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
