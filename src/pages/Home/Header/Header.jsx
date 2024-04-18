import { useState } from "react";
import './header.scss';

const Header = ()=> {
  const [emailInput, setEmailInput] = useState("")
  const handleEmailInput = (e)=>{
    setEmailInput( e.target.value)
  }
  const afterClick = (e)=>{
    e.preventDefault()
    console.log(emailInput);
  }
  return (
    <header className="header">
      <section className="landing-page">
        <h1 className="landing-page__header">Inside Design: Stories and interviews</h1>
        <div className="landing-page__content">
          <p>Subscribe to learn about new product features, articles and updates.
          </p>
        <div className="landing-page__subscribe-field">

          {/* EMAIL FORM */}
          <form onSubmit={afterClick} className="sub-form">
            <section className="emailInput e-field">
            <input type="email" name="email" className="subscriberEmail e-input" onChange={handleEmailInput}  placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
            </section>
          </form>

        </div>
        </div>
        <section className="success-modal" aria-hidden>
          <h3 className="display-msg">
            Thank you <span>{emailInput.email}</span> for subscribing
          </h3>
          <img src="./check.png" alt="" />
          <button type="button">Yay 🎉!</button>
        </section>
      </section>
    </header>
  )
}
export default Header
