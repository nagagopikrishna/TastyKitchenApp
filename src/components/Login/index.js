import {Component} from 'react'
import './index.css'

class Login extends Component {
  renderUserNameField = () => (
    <>
      <label htmlFor="userName" className="label-element">
        USERNAME
      </label>
      <input type="text" id="userName" className="input-element" />
    </>
  )

  renderPasswordField = () => (
    <>
      <label htmlFor="password" className="label-element">
        PASSWORD
      </label>
      <input type="password" id="password" className="input-element" />
    </>
  )

  render() {
    const smallImageUrl =
      'https://res.cloudinary.com/ddc7e5e7s/image/upload/v1712446697/Rectangle_1457_x6gxiu.png'
    const largeImageUrl =
      'https://res.cloudinary.com/ddc7e5e7s/image/upload/v1711969684/Rectangle_1456_wyhlxk.png'
    const icon =
      'https://res.cloudinary.com/ddc7e5e7s/image/upload/v1711970355/Frame_274_qqqnqq.png'

    return (
      <div className="login-container">
        <div className="login-form-container">
          <img src={icon} alt="website logo" className="icon" />
          <h1 className="heading"> Tasty Kitchen </h1>
          <h1 className="login-heading"> Login </h1>
          <form className="form-container">
            {this.renderUserNameField()}
            {this.renderPasswordField()}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
        <img src={largeImageUrl} alt="website logo" className="website-image" />
        <div className="responsive-container">
          <img
            src={smallImageUrl}
            alt="website small logo"
            className="small-website-logo"
          />
          <h1 className="login-heading"> Login </h1>
          <form className="form-container">
            {this.renderUserNameField()}
            {this.renderPasswordField()}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
