import { useEffect, useState } from "react";
import './header.scss';

const Header = ()=> {
  const [emailInput, setEmailInput] = useState("");
  const [ showPrompt, setShowPrompt ] = useState(false)
  const handleEmailInput = (e)=>{
    setEmailInput(e.target.value)
  }
  const afterClick = (e)=>{
    e.preventDefault();
    setEmailInput("")
    setShowPrompt(true)
  }
  useEffect(()=>{
    const showSubcribe = setTimeout(()=> setShowPrompt(false), 3000)

    return()=>{
      clearTimeout(showSubcribe)
    }
  }, [showPrompt])
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
            <input type="email" name="email" className="subscriberEmail e-input" 
            value={emailInput}
            onChange={handleEmailInput}  placeholder="Enter your email" required />
            <button type="submit">Subscribe<span style={{display: showPrompt ?"inline-block" : "none"}}>d 🎉</span></button>
            </section>
          </form>

        </div>
        </div>
      </section>
    </header>
  )
}
export default Header
