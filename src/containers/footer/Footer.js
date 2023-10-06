import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt_footer sec-padding'>
      <div className="gpt_footer-head">
        <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt_footer-btn">
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt_footer-links">
        <div className="gpt_footer-logo">
          <img src={logo} alt="logos" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt_footer-div">
          <h4>Links</h4>
          <p>Overones</p>
          <p>Social Media</p>
          <p>Counter</p>
          <p>Contact</p>
        </div>
        <div className="gpt_footer-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
          <p>Support</p>
        </div>
        <div className="gpt_footer-div">
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>someone@gmail.com</p>
        </div>
      </div>
      <div className="gpt_footer-right">
          <p>&copy; 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}
export default Footer