
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
            <div className="footer-site-about">
                <div className="footer-logo">
                    Untitled BLOG
                </div>
                <div className="fs__description">
                    Design amazing digital experiences that create more happy in the world.
                </div>
            </div>
            <div className="footer-section-links">
                {/* PRODUCT */}
                <div className="fs-owner">
                    <div className="fs__title">
                        Product
                    </div>
                    <div className="fs__links">
                        <a href="#">Overview</a>
                        <a href="#">Features</a>
                        <a href="#">Solutions</a>
                        <a href="#">Tutorials</a>
                    </div>
                </div>
                {/* COMPANY */}
                <div className="fs-owner">
                    <div className="fs__title">
                        Company
                    </div>
                    <div className="fs__links">
                        <a href="#">About us</a>
                        <a href="#">Careers</a>
                        <a href="#">Press</a>
                        <a href="#">News</a>
                    </div>
                </div>
                {/* SOCIAL */}
                <div className="fs-owner">
                    <div className="fs__title">
                        Social
                    </div>
                    <div className="fs__links">
                        <a href="#">Twitter</a>
                        <a href="#">Linkdein</a>
                        <a href="#">Facebook</a>
                        <a href="#">Github</a>
                    </div>
                </div>
                {/* LEGAL */}
                <div className="fs-owner">
                    <div className="fs__title">
                        Legal
                    </div>
                    <div className="fs__links">
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookies</a>
                        <a href="#">Licenses</a>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-copy-right-section">
                <p>&copy; 2077 Untitled Blog. All rights reserved.</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer;