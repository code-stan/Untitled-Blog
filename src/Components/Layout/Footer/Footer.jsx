
import './footer.scss';
const Footer = ()=> {
  return (
    <footer className="footer">
        <div className="gradient"></div>
        {/* NEWSLETTER SECTION */}
        <div className="newsletter-section">
            <div className="newsletter__content">
                <h3 className="newsletter__header">
                    Sign up to our newsletter
                </h3>
                <p>Stay up to date with the latest news, announcements, and articles.</p>
            </div>
            <div className="newsletter__subscribe-field">
                <form action="" className="e-field">
                    <input type="email"  className="ns__email e-input" placeholder="Enter your email"/>
                    <button type="submit" className="ns__button e-button">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>

        {/* FOOTER ITEMS  */}
        <section className="footer-content"> 
            <div className="footer-copy-right-section">
                <p>&copy; 2077 Untitled Blog. All rights reserved.</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer;