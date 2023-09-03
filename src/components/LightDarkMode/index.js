// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    backgroundColor: 'box-dark-bg',
    title: 'title-light',
    mode: 'Light Mode',
  }

  buttonMode = () => {
    this.setState(prev => ({
      backgroundColor:
        prev.backgroundColor === 'box-dark-bg' ? 'box-light-bg' : 'box-dark-bg',
      title: prev.title === 'title-light' ? 'title-dark' : 'title-light',
      mode: prev.mode === 'Light Mode' ? 'Dark Mode' : 'Light Mode',
    }))
  }

  render() {
    const {backgroundColor, title, mode} = this.state

    return (
      <div className="Light-Dark-Mode-bg">
        <div className={`Light-Dark-Mode-box ${backgroundColor}`}>
          <h1 className={`Light-Dark-title ${title}`}> Click To Change Mode</h1>
          <button className="button-style" onClick={this.buttonMode}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
