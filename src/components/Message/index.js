import './index.css'

const Message = props => {
  const {isLogedIn} = props
  return isLogedIn ? (
    <h1 className="msg">Welcome User</h1>
  ) : (
    <h1 className="msg"> Please Login</h1>
  )
}

export default Message
