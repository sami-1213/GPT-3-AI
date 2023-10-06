import './header.css'
import Group from '../../assets/Group.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt_head sec-padding' id='home'>
      <div className="gpt_head_content">
        <h1 className='gradient_text'>
        Let’s Build Something 
        amazing with GPT-3 OpenAI
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. 
          Not thoughts all exercise blessing. Indulgence way everything joy 
          alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="gpt_head-content_input">
          <input type="email" placeholder='Your Email Address' />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt_head_content-people">
          <img src={Group} alt="peoples"  />
          <p>1,700 people requested access a visit in last 24 hours</p>
        </div>          
      </div>
      <div className="gpt_head-image">
            <img src={ai} alt="ai" />
      </div>
    </div>
  )
}
export default Header