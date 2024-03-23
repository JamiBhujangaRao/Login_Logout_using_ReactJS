import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogedIn: false}

  onButton = () => {
    const {isLogedIn} = this.state
    this.setState({isLogedIn: !isLogedIn})
  }

  render() {
    const {isLogedIn} = this.state
    return (
      <div className="home">
        <div className="login-card">
          <Message isLogedIn={isLogedIn} />
          {isLogedIn ? (
            <Logout logout={this.onButton} />
          ) : (
            <Login login={this.onButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
